# Cloudflare Full-Stack Notes (TanStack Start + Hono + Drizzle + D1)

These notes summarize the key takeaways from surveying Cloudflare's Workers + D1 docs, Hono deployment guides, and Drizzle ORM recipes for the Workers runtime.

## Platform highlights
- **Workers + Pages**: TanStack Start ships as an SSR Worker. Keeping the frontend Worker separate from the API Worker lets us deploy independently and scale by route.
- **Service bindings for private APIs**: Use a service binding from the frontend Worker to the Hono API Worker so requests stay on Cloudflare's internal network (no public DNS exposure needed).
- **D1 + Drizzle**: Drizzle's `drizzle-orm/d1` driver works in the Workers runtime and can run inside Hono route handlers. Schema lives in TypeScript and can be migrated via `drizzle-kit`.

## Recommended architecture
1. **Frontend Worker (TanStack Start)**
   - Serves SSR/SPA assets.
   - Uses a service binding to reach the API Worker at `/internal/*`.
   - Reads an internal base URL or binding name from env for server-side data fetching.
2. **API Worker (Hono)**
   - All business logic lives here.
   - Routes live under `/internal/*` and should not be exposed via public DNS.
   - D1 bound as `DB`; Drizzle handles queries.
3. **Database (D1)**
   - Managed SQLite with HTTP-based driver.
   - Migrations generated with `drizzle-kit` and applied via Wrangler.

## Deployment checklist
- Create a D1 database and update `backend/wrangler.jsonc` with its `database_id`.
- Deploy the API Worker with `pnpm dev:backend` (local) or `wrangler deploy` once bindings are set.
- Add a **service binding** from the frontend Worker to `tankstack-hono-api` to keep API traffic internal.
- Store any internal base URLs or binding names in typed env helpers so routing stays explicit.
