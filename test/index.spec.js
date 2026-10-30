import { env, createExecutionContext, waitOnExecutionContext, SELF, fetchMock } from "cloudflare:test";
import { beforeEach, describe, expect, it } from "vitest";
import worker from "../src";

const BASE = "http://arkhamrevived.kiwifruitdev.com";
const PROFILE_UUID = "ps3_Another_Hermit_e929e446-b66e-4255-8ca4-c3f0bd3711aa";

/** Every POST the worker makes to the bot webhook, reset before each test. */
const webhookCalls = [];
let webhookMockInstalled = false;

function headerValue(headers, name) {
	if (!headers) return undefined;
	const entries = Array.isArray(headers) ? headers : Object.entries(headers);
	const match = entries.find(([key]) => String(key).toLowerCase() === name);
	return match ? match[1] : undefined;
}

function installWebhookMock() {
	if (webhookMockInstalled) return;
	webhookMockInstalled = true;
	const url = new URL(env.WEBHOOK_URL);
	fetchMock
		.get(url.origin)
		.intercept({ path: url.pathname, method: "POST" })
		.reply((options) => {
			webhookCalls.push({
				body: JSON.parse(options.body),
				secret: headerValue(options.headers, "x-webhook-secret")
			});
			return { statusCode: 202, data: { ok: true } };
		})
		.persist();
}

function createTicket(username) {
	const offset = 0x54;
	const bytes = new Uint8Array(offset + username.length + 1);
	bytes.set(new TextEncoder().encode(username), offset);
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary);
}

function ticketBody(username) {
	return new URLSearchParams({
		grant_type: "http://ns.fireteam.net/oauth2/grant-type/psn",
		ticket: createTicket(username)
	}).toString();
}

function profileBody(overrides = {}) {
	return JSON.stringify({
		data: {
			MobileUnlock_Earth2DarkKnightAlt: true,
			AccountXP: 0,
			AccountXPLevel: 28,
			LastModified: "2030.08.07-20.35.13",
			...overrides
		}
	});
}

async function fetchWorker(request) {
	const ctx = createExecutionContext();
	const response = await worker.fetch(request, env, ctx);
	await waitOnExecutionContext(ctx);
	return response;
}

function putProfile(body) {
	return fetchWorker(
		new Request(`${BASE}/users/${PROFILE_UUID}/profile/private`, {
			method: "PUT",
			body
		})
	);
}

describe("ArkhamRevivedWorker", () => {
	beforeEach(() => {
		fetchMock.activate();
		fetchMock.disableNetConnect();
		installWebhookMock();
		webhookCalls.length = 0;
	});

	it("redirects the bare domain to the project page", async () => {
		const response = await fetchWorker(new Request(`${BASE}/`));
		expect(response.status).toBe(301);
		expect(response.headers.get("location")).toBe("https://kiwifruitdev.com/arkhamrevived/");
	});

	it("still serves the motd through the SELF integration harness", async () => {
		const response = await SELF.fetch(`${BASE}/motd`);
		expect(response.status).toBe(200);
	});

	it("serves the motd from assets", async () => {
		const response = await fetchWorker(new Request(`${BASE}/motd`));
		expect(response.status).toBe(200);
		expect(response.headers.get("content-type")).toContain("application/json");
		const text = await response.text();
		expect(() => JSON.parse(text)).not.toThrow();
	});

	it("returns a default profile for unknown players", async () => {
		const response = await fetchWorker(new Request(`${BASE}/users/${PROFILE_UUID}/profile/private`));
		expect(response.status).toBe(200);
		const profile = await response.json();
		expect(profile.data.MobileUnlock_Earth2DarkKnightAlt).toBe(true);
	});

	it("issues a deterministic token and reports the login to the bot", async () => {
		const response = await fetchWorker(
			new Request(`${BASE}/auth/token`, {
				method: "POST",
				headers: { "content-type": "application/x-www-form-urlencoded" },
				body: ticketBody("Another_Hermit")
			})
		);

		expect(response.status).toBe(200);
		const token = await response.json();
		expect(token.token_type).toBe("bearer");
		expect(token.access_token).toMatch(/^ps3_Another_Hermit_[0-9a-f-]{36}$/);

		expect(webhookCalls).toHaveLength(1);
		expect(webhookCalls[0].secret).toBe(env.WEBHOOK_SECRET);
		expect(webhookCalls[0].body).toMatchObject({
			type: "player_login",
			platform: "ps3",
			username: "Another_Hermit",
			uuid: token.access_token
		});
		expect(Date.parse(webhookCalls[0].body.timestamp)).not.toBeNaN();
	});

	it("does not report xbox logins", async () => {
		const response = await fetchWorker(
			new Request(`${BASE}/auth/token`, {
				method: "POST",
				headers: { "content-type": "application/x-www-form-urlencoded" },
				body: "grant_type=xbox"
			})
		);
		expect(response.status).toBe(200);
		expect(webhookCalls).toHaveLength(0);
	});

	it("stores the first profile write without reporting a diff", async () => {
		const response = await putProfile(profileBody({ AccountXP: 100 }));
		expect(response.status).toBe(204);
		expect(await env.PROFILES.get(PROFILE_UUID)).toContain('"AccountXP":100');
		expect(webhookCalls).toHaveLength(0);
	});

	it("reports a before/after diff on profile writes", async () => {
		await env.PROFILES.put(PROFILE_UUID, profileBody({ AccountXP: 100, AccountXPLevel: 28 }));

		const response = await putProfile(profileBody({ AccountXP: 160, AccountXPLevel: 29 }));

		expect(response.status).toBe(204);
		expect(webhookCalls).toHaveLength(1);
		expect(webhookCalls[0].secret).toBe(env.WEBHOOK_SECRET);
		expect(webhookCalls[0].body.type).toBe("profile_update");
		expect(webhookCalls[0].body.username).toBe("Another_Hermit");
		expect(webhookCalls[0].body.platform).toBe("ps3");
		expect(webhookCalls[0].body.uuid).toBe(PROFILE_UUID);
		expect(webhookCalls[0].body.changes).toContainEqual({ path: "data.AccountXP", before: 100, after: 160 });
		expect(webhookCalls[0].body.changes).toContainEqual({ path: "data.AccountXPLevel", before: 28, after: 29 });
		expect(webhookCalls[0].body.changes).toHaveLength(2);
	});

	it("never reports the LastModified field", async () => {
		await env.PROFILES.put(PROFILE_UUID, profileBody({ LastModified: "2030.08.07-20.35.13" }));

		await putProfile(profileBody({ LastModified: "2030.08.08-11.00.00" }));

		expect(webhookCalls).toHaveLength(0);
	});

	it("skips uninitialized and oversized profile writes", async () => {
		await env.PROFILES.put(PROFILE_UUID, profileBody({ AccountXP: 5 }));

		const uninitialized = await putProfile(JSON.stringify({ data: { AccountXP: 6 } }));
		expect(uninitialized.status).toBe(204);

		const oversized = await putProfile(profileBody({ Padding: "x".repeat(46_000) }));
		expect(oversized.status).toBe(204);

		expect(webhookCalls).toHaveLength(0);
		expect(await env.PROFILES.get(PROFILE_UUID)).toContain('"AccountXP":5');
	});

	it("rejects unsupported methods", async () => {
		const response = await fetchWorker(new Request(`${BASE}/motd`, { method: "DELETE" }));
		expect(response.status).toBe(405);
	});
});