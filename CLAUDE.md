# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TanStack Start application showcasing TanStack ecosystem integration, including Router, Query, Form, Table, and Store. It includes demo implementations of AI chat functionality using Claude 3.5 Sonnet and MCP (Model Context Protocol) integration.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (runs on port 3000)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm serve

# Run tests
pnpm test

# Linting and formatting (using Biome)
pnpm lint
pnpm format
pnpm check

# Deploy to Cloudflare
pnpm deploy

# Add shadcn components
pnpx shadcn@latest add <component-name>
```

## Architecture

### Core Stack
- **Framework**: TanStack Start (full-stack React framework)
- **Router**: TanStack Router with file-based routing
- **State Management**: TanStack Store with derived state support
- **Data Fetching**: TanStack Query with SSR integration
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Deployment**: Cloudflare Workers via Wrangler
- **AI Integration**: Vercel AI SDK with Anthropic Claude and MCP support

### Key Configuration
- **TypeScript**: Strict mode enabled, uses path aliases (`@/*` → `./src/*`)
- **Biome**: Configured with tabs for indentation, double quotes for strings
- **Vite**: Includes React Compiler plugin, devtools, and Tailwind CSS integration
- **Environment Variables**: Type-safe via T3 Env (see `src/env.ts`)

### File-Based Routing
Routes are managed as files in `src/routes/`. TanStack Router automatically generates route definitions in `src/routeTree.gen.ts` (do not edit manually).

- Create new routes by adding files in `src/routes/`
- Layout is defined in `src/routes/__root.tsx`
- Routes can have loaders for data fetching before render
- API routes are supported (e.g., `src/routes/demo/api.*.ts`)

### MCP Integration
The application includes Model Context Protocol support:
- `src/utils/mcp-handler.ts`: Handles MCP JSON-RPC requests using InMemoryTransport
- `src/mcp-todos.ts`: Example MCP server implementation
- MCP servers can be exposed via API routes and used by AI integrations

### TanStack Query + Router Integration
Router and Query are integrated via `setupRouterSsrQueryIntegration` in `src/router.tsx`. The QueryClient is provided through router context and wrapped around the application.

### Demo Files
Files prefixed with `demo` are examples and can be safely deleted. They demonstrate:
- Server-side rendering modes (SSR, SPA, data-only)
- TanStack Form with validation
- TanStack Table with filtering/sorting
- TanStack Store with devtools
- AI chat using Claude API
- MCP server integration

### Environment Variables
Add environment variables to `src/env.ts` following T3 Env patterns:
- Server variables: No prefix required
- Client variables: Must have `VITE_` prefix
- Runtime env is `import.meta.env`

### Cloudflare Deployment
Configured for Cloudflare Workers deployment:
- `wrangler.jsonc`: Deployment configuration
- Uses `nodejs_compat` compatibility flag
- Entry point: `@tanstack/react-start/server-entry`