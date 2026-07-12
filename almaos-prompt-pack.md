# AlmaOS Prompt Pack for Claude Code + Codex

Target agents: Claude Opus 4.x / Claude Code (how this repo was originally built) and the OpenAI Codex agent (already installed and connected to rachdelaguila/wellness-health-sync; the Becoming/Joy branch was built with it). Claude 3 Opus is deprecated; these prompts work on any current coding agent.

## How to use

1. Run Prompt A once, with either agent, to create AGENTS.md and CLAUDE.md at the repo root. After that, both agents pick up the engineering standards automatically: Codex reads AGENTS.md at the start of every task, Claude Code reads CLAUDE.md. This replaces re-pasting Prompt 0 in every Codex session.
2. Then run Prompts 1 through 6 in order. Each is scoped to land as one reviewable PR. Do not start the next prompt until the prior PR is merged, and never run the same prompt on both agents in parallel (they will produce conflicting branches).
3. For chat-based sessions (claude.ai, ChatGPT) where the agent has no repo file access, prepend Prompt 0 manually as before.

## Agent routing (recommended division of labor)

| Prompt | Route to | Why |
|---|---|---|
| 1 TypeScript migration | Claude Code | Large mechanical refactor across the whole Worker; benefits from long-horizon single-session execution |
| 2 D1 + backfill | Claude Code | Schema design plus a data migration you want done in one coherent pass |
| 3 Auth hardening | Codex | It built the cookie-auth branch, so it has the most context to merge/port that work; run it as a Codex cloud task against that branch |
| 4 Calendar sync + crons | Either | Self-contained module; good async Codex task while you do Claude Code work elsewhere |
| 5 Frontend de-risking | Claude Code | Touches the Turrell UI you care about visually; keep it in the agent you supervise interactively |
| 6 Tests + CI | Codex | Well-specified, verifiable output; ideal fire-and-forget async task, and it double-checks the other agent's work with fresh eyes |

Cross-review rule: whichever agent wrote the PR, ask the other one to review it ("Review PR #N for violations of AGENTS.md, missing edge cases, and secret leakage"). Two-agent review is cheap insurance for a system that must run unattended for 9 weeks.

---

## Prompt A: Bootstrap AGENTS.md and CLAUDE.md (run once, either agent)

```
You are working in rachdelaguila/wellness-health-sync.
TASK: Create two files at the repo root so that both the OpenAI Codex agent and Claude Code operate under identical engineering standards without per-session pasting.
1. Create AGENTS.md containing, verbatim, the SYSTEM OVERVIEW, NON-NEGOTIABLE ENGINEERING STANDARDS, and WORKFLOW sections from the block I will paste below (the "Prompt 0" block). Add one extra section at the end:
   AGENT CONVENTIONS
   - Branch naming: {agent}/{scope}, e.g. codex/auth-hardening, claude/d1-migration.
   - Never force-push. Never commit directly to main. One PR per task.
   - Before starting, check open PRs and existing branches; if another agent has an open PR touching the same files, stop and report the conflict instead of proceeding.
   - Run the full verification suite (typecheck, lint, test) before opening or updating any PR, and paste the command output into the PR body.
   - Never write real health values, journal text, tokens, or secrets into code, fixtures, commit messages, or PR bodies.
2. Create CLAUDE.md containing a single line: "Read AGENTS.md and follow it as binding instructions." plus any Claude Code-specific notes (preferred: run `npm run typecheck && npm run lint && npm test` before every commit).
3. Open a PR containing only these two files.
[Paste the full Prompt 0 block here.]
```

---

## Prompt 0: Shared Context (source of truth for AGENTS.md; prepend manually only in chat sessions without repo access)

```
You are a senior TypeScript engineer working in the repo rachdelaguila/wellness-health-sync. If AGENTS.md exists at the repo root, it contains these same standards and is binding; re-read it before starting.
SYSTEM OVERVIEW
This repo is the backend for AlmaOS, a single-user personal wellness operating system. Current architecture:
- Cloudflare Worker (cloudflare-worker.js) with routes /ingest, /ingest/calendar, /ingest/becoming, /ingest/joy, /query
- Cloudflare Workers AI for embeddings (384-dim), Cloudflare Vectorize index "wellness-health-data" (cosine)
- iOS Shortcut posts Apple Health payloads to a webhook
- GitHub Actions archive and parse payloads via a Python script (being retired from the hot path)
- Frontend is a separate Vercel-deployed vanilla JS app; do NOT add React, Next.js, or UI routes to this repo
NON-NEGOTIABLE ENGINEERING STANDARDS
1. TypeScript strict mode ("strict": true, "noUncheckedIndexedAccess": true). No `any`. No `as` casts except at test boundaries with a comment justifying each one.
2. Every external input (HTTP body, query params, headers, D1 rows, KV values, Vectorize metadata) is validated with Zod before use. Parse, don't validate: derive types via z.infer, never hand-write a type that duplicates a schema.
3. Every function that can fail returns a typed Result<T, E> or throws a typed error from a central errors.ts with a discriminated `kind` field. No bare `throw new Error(string)` in domain code.
4. Modules must be pure and testable: domain logic (validation, unit conversion, streak math, day-boundary math) lives in src/domain/ with zero Cloudflare imports, so it runs under Vitest without miniflare.
5. Every PR includes: Vitest tests for new domain logic, updated README section, and a manual-verification section in the PR body with exact curl commands.
6. Privacy: never commit real health values, journal entries, reflections, or tokens. All fixtures and README examples use obviously fake data. Secrets only via wrangler secrets.
7. Health data validation rules (enforce in Zod schemas):
   - Timestamps: ISO 8601 with offset, stored as UTC epoch ms plus an explicit source `tz` string (IANA name). Reject naive timestamps.
   - sleep_hours in [0, 16], hrv_ms in [5, 300], resting_hr in [25, 130], steps in [0, 100000], active_kcal in [0, 4000], weight_kg in [30, 250]. Out-of-range values are rejected with error kind "VALIDATION_OUT_OF_RANGE" and logged, never silently clamped.
   - Units are normalized at the boundary: kJ to kcal, mi to km, minutes to hours for sleep. Unknown units produce error kind "VALIDATION_UNKNOWN_UNIT".
8. Idempotency: all ingest writes are upserts keyed on (date_local, metric_type, source). Re-sending the same payload must be a no-op that returns 200 with { deduped: true }.
WORKFLOW
Before writing code: inspect the repo, summarize the current architecture in 10 lines or fewer, list the files you will touch, and state your plan. Wait for nothing; proceed after stating the plan. After coding: run typecheck, lint, and tests; paste the output; open a PR with a summary, risks, and rollback note.
```

---

## Prompt 1: TypeScript migration and project scaffolding

```
[Prompt 0 here]
TASK: Convert this repo to a strict TypeScript Cloudflare Workers project without changing runtime behavior.
STEP-BY-STEP BLUEPRINT
1. Initialize tooling: package.json scripts for dev (wrangler dev), deploy, typecheck (tsc --noEmit), lint (eslint + @typescript-eslint, flat config), test (vitest), format (prettier). Pin exact versions.
2. Add tsconfig.json with strict: true, noUncheckedIndexedAccess: true, moduleResolution bundler, target ES2022.
3. Create the module layout:
   - src/index.ts (Worker entry, thin)
   - src/routes/ (one file per route group: health.ts, calendar.ts, becoming.ts, joy.ts, query.ts)
   - src/domain/ (pure logic: units.ts, dayBoundary.ts, errors.ts, result.ts)
   - src/schemas/ (Zod schemas: healthPayload.ts, calendarPayload.ts, becomingPayload.ts, joyPayload.ts)
   - src/adapters/ (vectorize.ts, workersAi.ts wrapping platform APIs behind interfaces)
   - test/ mirroring src/
4. Port cloudflare-worker.js into this structure preserving exact current behavior, including the existing Bearer auth (auth is replaced in Prompt 3, not here).
5. Wire Hono as the router. Every route handler is: authenticate, parse with Zod, call a domain function, map Result to an HTTP response. Handlers contain no business logic.
6. Add a typed Env interface for all bindings (Vectorize, AI, secrets) and validate at startup that required bindings exist, failing fast with a clear error.
ERROR AND EDGE CASE REQUIREMENTS
- Malformed JSON body: 400 with { error: { kind: "BAD_JSON" } }, never an unhandled exception.
- Zod failure: 422 with the flattened Zod issue list.
- Unknown route: 404 JSON, not HTML.
- All 5xx paths log a structured error object (no PII, no raw payload contents) and return a generic message.
DEFINITION OF DONE
- wrangler dev serves all existing routes with identical responses to the JS version for the fixture payloads in test/fixtures/.
- tsc, eslint, vitest all pass. Zero `any`.
- PR body includes before/after curl output for /ingest and /query.
```

---

## Prompt 2: D1 canonical database and history backfill

```
[Prompt 0 here]
TASK: Introduce Cloudflare D1 as the single source of truth for all metrics, replacing git-committed JSON/CSV and frontend localStorage as stores of record. Vectorize becomes a derived index only.
STEP-BY-STEP BLUEPRINT
1. Add a D1 binding (database name almaos) to wrangler.toml and the typed Env.
2. Write migrations/0001_init.sql:
   - metrics(id, ts_utc INTEGER, tz TEXT, date_local TEXT, metric_type TEXT, value REAL, unit TEXT, source TEXT, raw_ref TEXT NULL, created_at, UNIQUE(date_local, metric_type, source))
   - calendar_events(id, ts_start_utc, ts_end_utc, tz, title, calendar TEXT, busy INTEGER, UNIQUE(ts_start_utc, title, calendar))
   - reflections(id, date_local, type, text, metadata_json, privacy TEXT CHECK(privacy IN ('private','demo')))
   - joy_inputs(id, date_local, input_type, title, text, tags_json, source)
   - daily_rollups(date_local PRIMARY KEY, tz, sleep_hours, hrv_ms, resting_hr, steps, active_kcal, day_type TEXT, computed_at)
   - sync_log(id, source, received_at, status TEXT, error_kind TEXT NULL)
3. Build src/adapters/db.ts as a repository layer: typed functions (upsertMetric, getMetricsRange, upsertCalendarEvent, insertReflection, getRollup, writeSyncLog). Raw SQL lives only in this file. Every row read is parsed through a Zod row schema before crossing into domain code.
4. Rewire all ingest routes to write to D1 first, then embed and upsert to Vectorize. If the Vectorize step fails, the D1 write still commits and the failure is recorded in sync_log with error kind "VECTORIZE_DEFERRED" so it can be replayed.
5. Backfill script scripts/backfill.ts: reads the historical JSON/CSV files produced by the old GitHub Actions pipeline, normalizes units and timezones through the same src/domain/units.ts used at runtime (one code path, not two), and inserts via the repository with idempotent upserts. Print a summary table: rows read, inserted, deduped, rejected with reasons.
6. Raw payload archival: on ingest, store the raw body in R2 under raw/{source}/{date_local}/{uuid}.json and save the key in metrics.raw_ref. Add the R2 binding.
EDGE CASES TO HANDLE EXPLICITLY
- Duplicate submissions: prove idempotency with a test that ingests the same fixture twice and asserts one row plus { deduped: true }.
- Timezone flip: a fixture where the device tz changes from America/New_York to Europe/London mid-dataset; assert date_local is computed from the payload tz, not the server clock, and no day is double-counted or skipped.
- DST boundary: fixture spanning a DST transition; assert a 23-hour and a 25-hour local day both roll up correctly.
- Partial-day data: rollup with only sleep present leaves other columns NULL, never 0. Zero and missing are different facts in health data.
- Backfill collision with live data: backfill must never overwrite a newer live row; assert last-write-wins by created_at only within the same source.
DEFINITION OF DONE
- All routes read/write D1; Vectorize contains no data absent from D1.
- Backfill dry-run mode (--dry-run) prints the summary without writing.
- Tests cover the five edge cases above. tsc, lint, tests green.
```

---

## Prompt 3: Auth hardening (HMAC ingest + unified cookie sessions)

```
[Prompt 0 here]
TASK: Replace static Bearer token auth with two distinct mechanisms: HMAC request signing for machine ingest (iOS Shortcut), and HttpOnly cookie sessions for the human-facing private API. Unify with the cookie-auth work that exists on the Becoming/Joy branch; merge or port it rather than duplicating.
NOTE FOR CODEX: you authored the HttpOnly cookie auth on the Becoming/Joy branch. Start by diffing that branch against main, inventory what it implemented (unlock flow, cookie signing, protected /app/becoming and /app/joy routes, demo separation), and reuse or port that work into the structure below rather than rewriting it. List any divergences between the branch implementation and these requirements before coding.
STEP-BY-STEP BLUEPRINT
1. HMAC for /ingest/* routes:
   - Shortcut sends headers X-Alma-Timestamp (unix seconds) and X-Alma-Signature = hex(HMAC-SHA256(secret, timestamp + "." + rawBody)).
   - Middleware verifies: signature matches (constant-time comparison via crypto.subtle), timestamp within 300 seconds of server time (rejects replay), body read exactly once.
   - Secret stored as wrangler secret INGEST_HMAC_SECRET. Support INGEST_HMAC_SECRET_NEXT for zero-downtime rotation: accept either during a rotation window.
2. Cookie sessions for /app/* private routes (becoming, joy, query with private scope):
   - POST /auth/unlock with a passphrase checked against a wrangler secret via constant-time comparison; on success set an HttpOnly, Secure, SameSite=Strict cookie containing a signed session token (HMAC-signed payload with issued-at and 30-day expiry). No JWT library; sign with crypto.subtle.
   - Middleware validates the cookie on every /app/* request; 401 JSON on failure.
   - POST /auth/lock clears the cookie.
3. Demo routes (/demo/*) remain public and serve only fixture data; add a test asserting no demo route handler imports the private repository functions that return real data.
4. Update the README iOS Shortcut section with the exact Shortcut actions to compute the HMAC (or, if Shortcuts cannot do HMAC natively, document the fallback: a per-device long random token sent as X-Alma-Device-Key checked in constant time, plus the timestamp window). State the tradeoff explicitly in the README.
5. Rate limiting: 30 requests/minute per route group using a KV counter; 429 with Retry-After on breach.
ERROR STATES
- Missing/expired/invalid signature: 401 with error kind, and a sync_log row so failed syncs are visible while the user is abroad.
- Clock skew beyond window: distinct error kind "AUTH_CLOCK_SKEW" so it is diagnosable from logs.
DEFINITION OF DONE
- Old static Bearer path removed. Tests cover: valid HMAC, tampered body, stale timestamp, rotation window accepting both secrets, cookie issue/verify/expiry, demo-route isolation.
- PR body documents the secret rotation runbook in 5 numbered steps.
```

---

## Prompt 4: Server-side Google Calendar sync + cron scheduler

```
[Prompt 0 here]
TASK: Move Google Calendar from client-side OAuth (popup, expiring token, requires user presence) to server-side sync running unattended on a cron trigger. The system must run for 9+ weeks with zero human intervention.
STEP-BY-STEP BLUEPRINT
1. One-time auth bootstrap: scripts/gcal-bootstrap.ts (run locally, never deployed) performs the OAuth authorization-code flow for scope calendar.readonly and prints the refresh token for manual storage as wrangler secret GCAL_REFRESH_TOKEN, alongside GCAL_CLIENT_ID and GCAL_CLIENT_SECRET.
2. src/adapters/gcal.ts: exchanges the refresh token for an access token (cache in KV with expiry minus 60s), fetches events for a rolling window (yesterday through +7 days) using singleEvents=true and the events.list API, and normalizes into the calendar_events D1 schema.
3. Cron triggers in wrangler.toml:
   - "*/30 * * * *": calendar sync
   - "15 4 * * *": nightly rollup job that computes daily_rollups for the prior local day (respect stored tz), recomputes streaks, and writes the daily brief to KV key brief:{date_local} with 26h TTL
   - "0 */6 * * *": dead-man check (see step 5)
4. /query and the daily brief route read from the KV cache first; on miss, compute, store, return. Invalidate brief:{today} on any new ingest for today.
5. Dead-man alerting: if MAX(sync_log.received_at where status='ok' and source='apple_health') is older than 36 hours, send one alert email via MailChannels (or an equivalent free Workers-compatible sender) and set KV flag alert:sent:{date} so it fires at most once per day. Include the last error kinds from sync_log in the email body.
EDGE CASES
- Google returns 401 on refresh (revoked token): log error kind "GCAL_TOKEN_REVOKED", trigger the dead-man email path immediately with instructions to re-run the bootstrap script. Do not retry-loop.
- Recurring events, all-day events (date vs dateTime), declined events (skip), and events spanning midnight local time (attribute busy-minutes to each local day proportionally).
- API 429/5xx: exponential backoff, max 3 attempts, then log and let the next cron retry. A single failed sync must never crash the cron handler.
- Rollup for a day with zero data: write a rollup row with NULLs and day_status='no_data' so gaps are visible, not invisible.
DEFINITION OF DONE
- wrangler dev --test-scheduled exercises all three crons. Tests cover token refresh caching, midnight-spanning events, and the dead-man threshold logic (inject clock).
- README gains an "Unattended operation" runbook: what runs when, what alerts mean, recovery steps.
```

---

## Prompt 5: Frontend de-risking (typed API client, kill localStorage-as-database)

```
You are a senior TypeScript engineer working on the AlmaOS frontend: a single-file vanilla JS/CSS app (index.html) deployed to Vercel, featuring a four-orb layout (Sleep/blue, Nutrition/amber, Movement/teal, Recovery/coral) with a James Turrell-inspired aesthetic. Do not migrate to React or Next.js. Do not change the visual design. Preserve the existing DOM structure and CSS.
[Also prepend the ENGINEERING STANDARDS and health validation rules from Prompt 0.]
TASK: Make the backend the source of truth. localStorage becomes a write-through cache only.
STEP-BY-STEP BLUEPRINT
1. Introduce a minimal build step: split inline JS into src/*.ts modules bundled to a single app.js with esbuild; index.html changes only by replacing the inline script with one script tag. Add typecheck and build scripts.
2. Create src/apiClient.ts: typed functions for every backend route (getBrief, getMetricsRange, logMeal, logWorkout, unlock, lock, getBecoming, saveBecoming, getJoy, saveJoy). Every response is parsed with Zod schemas shared conceptually with the backend (duplicate the schemas in this repo but add a comment linking to the backend source of truth; keep them in one schemas.ts for easy diffing).
3. State layer src/state.ts: on load, hydrate from the API; localStorage stores only (a) the last successful API snapshot for instant paint and offline read, and (b) a pending-writes queue. All writes go API-first; on network failure they enqueue and flash a subtle "syncing" indicator on the affected orb.
4. Pending-queue flush on reconnect (online event + interval), with the same idempotency keys the backend expects so replays are safe.
5. Auth UX: if any /app/* call returns 401, show the unlock passphrase prompt inline; never render private Becoming/Joy data from cache while locked.
ERROR AND EDGE CASE REQUIREMENTS
- Backend unreachable: app renders the last snapshot with a visible "last synced {time}" stamp. It must never render fabricated zeros.
- Snapshot schema drift (Zod parse fails on cached data): discard cache, fetch fresh, log to console with a structured object.
- Clock/timezone: all "today" computations use Intl-resolved local tz and ask the backend for date_local explicitly; never compute date strings via toISOString().slice(0,10), which silently uses UTC.
- Double-tap on log buttons: disable during in-flight request; idempotency key makes accidental duplicates safe anyway.
DEFINITION OF DONE
- Deleting localStorage and reloading fully restores state from the backend.
- tsc and esbuild pass in CI. Manual test checklist in PR body: log a meal offline, reconnect, verify single row in D1.
```

---

## Prompt 6: Test harness, CI gate, and pre-departure hardening

```
[Prompt 0 here]
TASK: Build the safety net that lets this system run untouched from August 21 to October 25.
STEP-BY-STEP BLUEPRINT
1. Vitest suites (pure domain, no miniflare needed) for: unit normalization table-driven tests (every supported unit in, canonical out, unknown unit rejected), range validation boundaries (exact min, exact max, one beyond each), day-boundary math across tz change and DST, streak computation (continuation, break, backfill insertion mid-streak, no_data day handling), HMAC verification vectors.
2. Integration tests with miniflare/wrangler test env: full ingest happy path to D1 row, duplicate ingest dedupe, Vectorize-failure-still-commits path, cookie auth lifecycle, cron rollup end to end against fixture data.
3. GitHub Actions CI (test-only, no data processing): typecheck, lint, unit tests, integration tests, and a build of the frontend repo if in a monorepo; required check on main.
4. Fixture library test/fixtures/: at least 10 realistic-but-fake Apple Health payloads including the pathological ones (locale kJ energy, missing HRV, sleep spanning midnight, London tz, duplicate send).
5. Smoke script scripts/smoke.ts runnable against production after each deploy: hits /health, performs a signed test ingest to a source='smoke' row, queries it back, and deletes it. Wire into a deploy script so a bad deploy is caught in 60 seconds.
6. Runbook README section "If something breaks while I'm in London": interpreting dead-man emails, replaying failed Vectorize upserts from sync_log, rotating the HMAC secret from a phone, and the exact wrangler commands for tail logs.
DEFINITION OF DONE
- CI green and required. Coverage report shows 100% of src/domain/. Smoke script proven against a preview deployment with output pasted in the PR.
```
