# Arkham: Revived Redux - Cloudflare Worker

The backend for **Arkham: Revived Redux**, running on Cloudflare Workers. It answers the game's requests
(auth, profiles, inventory, store, matchmaking helpers), stores profiles and inventories in Workers KV,
and notifies the [Discord bot](../arkham-revived-discord-bot) about player activity.

Check out the Arkham: Revived page on [my website](https://kiwifruitdev.com/arkhamrevived/) or join the [Discord](https://discord.gg/7BneAcgvZh)

> [!NOTE]
> Significant portions of this codebase were developed with AI assistance using
> [DeepSeek](https://www.deepseek.com/) and [GitHub Copilot](https://github.com/features/copilot).

## How it fits together

```
PS3 client ──► Worker ──► KV (PROFILES / INVENTORIES)
                 │
                 └──► POST $WEBHOOK_URL  (x-webhook-secret: $WEBHOOK_SECRET)
                          ├─ player_login    (after a successful /auth/token)
                          └─ profile_update  (after a profile write, with a before/after diff)
```

Webhook calls are queued with `ctx.waitUntil()`, so a slow or offline bot never delays the game.

## Routes

### `GET`

| Route | Description |
| --- | --- |
| `/` | Redirects to the Arkham: Revived page. |
| `/files/netvars.dat` | Base64 encoded `netvars.ini`. |
| `/motd` | `public/motd.json`. |
| `/store/catalog/general` | `public/catalog.json`. |
| `/store/offers` | `public/credits.json` when `vendor=4`, otherwise `public/store.json`. |
| `/users/me` | Echoes the bearer token back as `user_id`. |
| `/users/me/inventory` | The stored inventory, or the default inventory. |
| `/users/:id/wbnet` | `public/user-wbnet.json`. |
| `/users/:id/profile/private` | The stored profile, or the default profile. |

### `POST`

| Route | Description |
| --- | --- |
| `/auth/token` | Issues the deterministic player token and reports the login to the bot. |
| `/store/vouchers/transactions` | Echoes the voucher id as `transaction_id`. |
| `/store/purchases/transactions` | Echoes the offer id as `transaction_id`. |
| `/actions/arbitrate` | Stub arbitration response. |

### `PUT`

| Route | Description |
| --- | --- |
| `/users/:id/profile/private` | Stores a profile and reports the diff to the bot. |

Any other method returns `405`.

## Tokens and profiles

Every player id is derived, never random:

```
ps3_<PSN username>_<uuid v4 shaped HMAC-SHA256(username, UUID_HASH)>
```

The PS3 ticket is decoded from the base64 `ticket` form field; the username sits at offset `0x54` and is
read up to the first null byte. The token is repeatable, so a player keeps the same profile forever.

Profile writes are diffed against the previous stored profile. The diff skips `LastModified` and the noisy
blocks (`CustomizationProfileData`, `RecentUnlocks`, `LoadoutData`, `WeaponScores`, `MatchmakingData`) and
is capped at 40 fields:

```json
{
  "type": "profile_update",
  "platform": "ps3",
  "username": "Another_Hermit",
  "uuid": "ps3_Another_Hermit_e929e446-b66e-4255-8ca4-c3f0bd3711aa",
  "timestamp": "2026-10-30T08:05:00.000Z",
  "changes": [{ "path": "data.AccountXP", "before": 1250, "after": 1480 }]
}
```

The first write of a profile has nothing to compare against and is not reported. Xbox and PC tokens are
still issued for compatibility, but no activity is reported for them.

## Configuration

| Variable | Description |
| --- | --- |
| `UUID_HASH` | Secret used to HMAC player ids into UUIDs. Changing it invalidates every existing profile. |
| `WEBHOOK_URL` | Full URL of the bot webhook, e.g. `https://bot.example.com/webhook`. Leave empty to disable webhooks. |
| `WEBHOOK_SECRET` | Shared secret, sent as the `x-webhook-secret` header. Must match the bot's `WEBHOOK_SECRET`. |

Locally these live in `.env`; in production they are Worker secrets:

```bash
npx wrangler secret put UUID_HASH
npx wrangler secret put WEBHOOK_URL
npx wrangler secret put WEBHOOK_SECRET
```

KV bindings are declared in `wrangler.jsonc`: `INVENTORIES` and `PROFILES`.

## Development

```bash
npm install
npm run dev      # wrangler dev
npm test         # vitest (runs inside workerd, no network access)
npm run deploy   # wrangler deploy
```

`src/index.js` is the bundled worker source. Static files served by the worker live in `public/`.

### Tests

The Vitest suite uses `@cloudflare/vitest-pool-workers`, so it runs the real worker in workerd with local
KV. Outbound calls to the bot are intercepted with `cloudflare:test`'s `fetchMock`, which lets the tests
assert the exact webhook payloads:

- login flow: `/auth/token` returns a deterministic token and reports `player_login`
- no report for xbox logins
- first profile write is stored without a webhook call
- later profile writes report a `profile_update` diff, including the shared secret header
- `LastModified`-only writes, uninitialized payloads and oversized payloads never notify the bot
- static routes keep working (`/`, `/motd`)

Test bindings (`UUID_HASH`, `WEBHOOK_URL`, `WEBHOOK_SECRET`) are defined in `vitest.config.js`.

## Licence

Licensed under the [MIT License](/LICENSE).