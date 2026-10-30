import { defineWorkersConfig } from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				wrangler: { configPath: "./wrangler.jsonc" },
				miniflare: {
					bindings: {
						UUID_HASH: "test-uuid-hash-secret",
						WEBHOOK_URL: "http://localhost:4321/webhook",
						WEBHOOK_SECRET: "test-webhook-secret"
					}
				}
			}
		}
	}
});