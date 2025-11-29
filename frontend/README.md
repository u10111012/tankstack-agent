# Frontend (TanStack Start)

This folder contains the TanStack Start application. It now lives under `frontend/` so it can evolve independently from the API worker.

## Local development

```bash
pnpm dev:frontend
```

## Build

```bash
pnpm build
```

## Tests

```bash
pnpm test
```

## Internal API access

The UI should call the Hono API through a Cloudflare service binding (recommended) or an internal-only URL. Add any required host/binding names to `src/env.ts` so server-side code can read them without exposing them to the client.

- `VITE_INTERNAL_API_BASE` (optional): defaults to `http://127.0.0.1:8787/internal` during local dev and `/internal` in production. The homepage health check uses this value to ping the Hono worker.
