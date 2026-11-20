import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				wrangler: { configPath: "./wrangler.jsonc" },
				miniflare: {
					bindings: {
						UUID_HASH: "test-uuid-hash-secret",
						WEBHOOK_URL: "http://localhost:4322/webhook",
						WEBHOOK_SECRET: "test-webhook-secret",
						EVENT_START_TIMESTAMP: "1795132800",
						EVENT_END_TIMESTAMP: "1795766399",
						EVENT_XP_MULTIPLIER: "2",
						EVENT_PREFIX: "[THANKSGIVING - DOUBLE XP EVENT!]"
					}
				}
			}
		}
	}
});