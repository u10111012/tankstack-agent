# Backend (Hono + Drizzle + D1)

This folder contains the API worker that runs on Cloudflare Workers using [Hono](https://hono.dev/) and [Drizzle ORM](https://orm.drizzle.team/). The worker is designed to stay private behind Cloudflare's internal network by using service bindings instead of exposing public routes.

## Structure

- `src/index.ts`: Hono entry point that wires routes and health checks.
- `src/routes/internal.ts`: Internal-only routes surfaced via service bindings.
- `src/db/schema.ts`: Drizzle schema for the D1 database.
- `src/db/client.ts`: Helper to create a Drizzle client from the Worker bindings.
- `drizzle.config.ts`: Migration and type-generation config for Drizzle.
- `wrangler.jsonc`: Worker configuration with the D1 binding placeholder.

## Local development

```bash
pnpm dev:backend
```

Make sure to replace `__REPLACE_WITH_D1_ID__` in `wrangler.jsonc` with your real D1 database id before deploying.

## Migrations & type generation

`drizzle.config.ts` is configured for the D1 HTTP driver. Provide the required credentials before running any Drizzle CLI commands:

```bash
export D1_DATABASE_ID=your_d1_database_id
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_TOKEN=your_api_token
pnpm db:generate
```

## Internal networking

To keep the API private, expose only the `/internal/*` routes and reach them from the frontend Worker via a [service binding](https://developers.cloudflare.com/workers/platform/bindings/services/). This prevents public internet access while still allowing zero-latency calls from the TanStack frontend runtime.
