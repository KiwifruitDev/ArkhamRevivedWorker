// GET:
// - /files/netvars.dat -> static: netvars.ini
// - /motd -> static: motd.json
// - /store/catalog/general -> static: catalog.json
// - /store/offers?vendor=[0 or 4] -> static: 0 is store.json and 4 is credits.json
// - /users/me -> get "Bearer <uuid>" in authorization header return json {"user_id": "<uuid>"}
// - /users/me/inventory -> static: inventory.json
// - /users/[uuid]/wbnet -> static: user-wbnet.json
// - /users/[uuid]/profile/private -> pull save data from kv using uuid or use defaultprofile.json if it doesn't exist
// POST:
// - /auth/token -> "ticket" in body (remove all underscores and dashes) turn it into a consistent uuid and return json {"token_type": "bearer","access_token": "<uuid>","expires_in": 1000000,"refresh_token": ""};
// - /store/vouchers/transactions -> "voucher_id" in body return json {"transaction_id": "<sent voucher id>"} code 201
// - /store/purchases/transactions -> "offer_id" in body return json {"transaction_id": "<sent offer id>"} code 201
// PUT:
// - /store/vouchers/[transactionid] -> unimplemented
// - /store/purchases/[transactionid] -> unimplemented
// - /users/me/wbnet -> static: user-wbnet.json
// - /users/[uuid]/profile/private -> validate that body contains "\"MobileUnlock_Earth2DarkKnightAlt\": true," and is less than 45,000 characters long and if so then add to kv always return code 204

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
var index_default = {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      switch (request.method) {
        case "GET":
          return handleGet(request, env, url, path);
        case "POST":
          return handlePost(request, env, url, path);
        case "PUT":
          return handlePut(request, env, url, path);
        default:
          return new Response("", { status: 405 });
      }
    } catch (e) {
      console.error(e);
      return json({ error: "internal_server_error" }, 500);
    }
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
__name(json, "json");
async function loadStatic(env, filename) {
  const response = await env.ASSETS.fetch(
    `https://assets.local/${filename}`
  );
  if (!response.ok) {
    throw new Error(`Missing asset: ${filename}`);
  }
  return response.text();
}
__name(loadStatic, "loadStatic");
function getBearerUUID(request) {
  const auth = request.headers.get("authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : null;
}
__name(getBearerUUID, "getBearerUUID");
async function parseRequestBody(request) {
  const contentType = (request.headers.get("content-type") || "").toLowerCase();
  if (contentType.includes("application/json")) {
    return request.json();
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const text = await request.text();
    return Object.fromEntries(new URLSearchParams(text));
  }
  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const result = {};
    for (const [key, value] of formData.entries()) {
      result[key] = value;
    }
    return result;
  }
  return {};
}
__name(parseRequestBody, "parseRequestBody");
async function ticketToUUID(ticket) {
  const normalized = ticket.replace(/[_-]/g, "");
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(normalized)
  );
  const bytes = Array.from(new Uint8Array(hash));
  const hex = bytes.slice(0, 16).map((b) => b.toString(16).padStart(2, "0")).join("");
  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32)
  ].join("-");
}
__name(ticketToUUID, "ticketToUUID");
async function handleGet(request, env, url, path) {
  if (path === "" || path === "/" || path === "index.html") {
    return new Response("Hello World!");
  }
  if (path === "/files/netvars.dat") {
    const content = await loadStatic(env, "netvars.ini");
    const base64 = btoa(content);
    return json({ data: base64 });
  }
  if (path === "/motd") {
    return new Response(await loadStatic(env, "motd.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/store/catalog/general") {
    return new Response(await loadStatic(env, "catalog.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/store/offers") {
    const vendor = url.searchParams.get("vendor");
    if (vendor === "4") {
      return new Response(await loadStatic(env, "credits.json"), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(await loadStatic(env, "store.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/users/me") {
    const uuid = getBearerUUID(request);
    if (!uuid) {
      return json({ error: "unauthorized" }, 401);
    }
    return json({
      user_id: uuid
    });
  }
  if (path === "/users/me/inventory") {
    return new Response(await loadStatic(env, "inventory.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  const wbnetMatch = path.match(/^\/users\/([0-9a-fA-F-]+)\/wbnet$/);
  if (wbnetMatch) {
    return new Response(await loadStatic(env, "user-wbnet.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  const profileMatch = path.match(/^\/users\/([0-9a-fA-F-]+)\/profile\/private$/);
  if (profileMatch) {
    const uuid = profileMatch[1];
    let profile = await env.PROFILES.get(uuid);
    if (!profile) {
      profile = await loadStatic(env, "user-profile-default.json");
    }
    return new Response(profile, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response("", { status: 404 });
}
__name(handleGet, "handleGet");
async function handlePost(request, env, url, path) {
  if (path === "/auth/token") {
    const body = await parseRequestBody(request);
    const uuid = await ticketToUUID(body.ticket || "");
    return json({
      token_type: "bearer",
      access_token: uuid,
      expires_in: 1e6,
      refresh_token: ""
    });
  }
  if (path === "/store/vouchers/transactions") {
    const body = await parseRequestBody(request);
    return json(
      {
        transaction_id: body.voucher_id
      },
      201
    );
  }
  if (path === "/store/purchases/transactions") {
    const body = await parseRequestBody(request);
    return json(
      {
        transaction_id: body.offer_id
      },
      201
    );
  }
  return new Response("", { status: 404 });
}
__name(handlePost, "handlePost");
async function handlePut(request, env, url, path) {
  const voucherMatch = path.match(/^\/store\/vouchers\/([^/]+)$/);
  if (voucherMatch) {
    return new Response("", { status: 501 });
  }
  const purchaseMatch = path.match(/^\/store\/purchases\/([^/]+)$/);
  if (purchaseMatch) {
    return new Response("", { status: 501 });
  }
  if (path === "/users/me/wbnet") {
    return new Response(await loadStatic(env, "user-wbnet.json"), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const profileMatch = path.match(/^\/users\/([0-9a-fA-F-]+)\/profile\/private$/);
  if (profileMatch) {
    const uuid = profileMatch[1];
    const body = await request.text();
    if (body.length > 45e3) {
      console.log(`Too long body sent by user ${uuid}`)
      return new Response("", { status: 204 });
    }
    if (!body.includes(
      '"MobileUnlock_Earth2DarkKnightAlt":true'
    )) {
      console.log(`Uninitialized JSON sent by user ${uuid}`)
      return new Response("", { status: 204 });
    }
    await env.PROFILES.put(uuid, body);
    return new Response("", {
      status: 204
    });
  }
  return new Response("", { status: 404 });
}
__name(handlePut, "handlePut");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
