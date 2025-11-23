<!--
Sync Impact Report
==================
Version Change: Initial → 1.0.0
Modified Principles: N/A (initial creation)
Added Sections:
  - Core Principles (5 principles)
  - Development Standards
  - Quality Gates
  - Governance
Removed Sections: N/A
Templates Requiring Updates:
  - ✅ .specify/templates/plan-template.md (Constitution Check section aligns)
  - ✅ .specify/templates/spec-template.md (Requirements align with principles)
  - ✅ .specify/templates/tasks-template.md (Test-first and phase structure align)
  - ✅ .specify/templates/checklist-template.md (Generic structure compatible)
Follow-up TODOs: None - all placeholders filled
-->

# TanStack Agent Constitution

## Core Principles

### I. TanStack-First Architecture

The project MUST leverage the TanStack ecosystem as the foundation for all features. This includes TanStack Router for routing and navigation, TanStack Query for data fetching and caching, TanStack Form for form management and validation, TanStack Table for data tables, and TanStack Store for state management.

**Rationale**: The TanStack ecosystem provides type-safe, composable, and performant primitives that work seamlessly together. Using these tools consistently reduces integration complexity, improves developer experience, and ensures best practices for React applications.

**Non-negotiable rules**:
- New features MUST use TanStack Router file-based routing (src/routes/)
- Server state MUST be managed via TanStack Query with proper cache invalidation
- Forms with validation MUST use TanStack Form
- Client state requiring observability MUST use TanStack Store
- Do NOT introduce Redux, MobX, Zustand, or other state management unless explicitly justified

### II. Type Safety & Runtime Validation

All code MUST be written in TypeScript with strict mode enabled. External data boundaries (API responses, environment variables, form inputs) MUST be validated at runtime using Zod schemas. Type inference from Zod schemas MUST be preferred over manual type definitions where applicable.

**Rationale**: TypeScript provides compile-time safety, but runtime validation is essential for external data. Zod provides a single source of truth for both type and runtime validation, reducing duplication and preventing type-runtime mismatches.

**Non-negotiable rules**:
- All API routes MUST validate inputs with Zod schemas
- Environment variables MUST be validated via T3 Env (src/env.ts)
- NO `any` types except when interfacing with untyped third-party libraries (and document why)
- Form schemas MUST define validation logic using Zod

### III. Component Architecture & Styling

UI components MUST be built using shadcn/ui patterns with Tailwind CSS v4. Components MUST be accessible, composable, and follow the Radix UI design system. Styling MUST use Tailwind utility classes with class-variance-authority (CVA) for variants.

**Rationale**: shadcn/ui provides accessible, customizable components that live in the codebase rather than node_modules, giving full control. Tailwind CSS provides consistent styling with minimal CSS overhead. CVA enables type-safe variant management.

**Non-negotiable rules**:
- New UI components MUST be added via `pnpx shadcn@latest add <component>`
- Custom components MUST use CVA for variant management
- Components MUST be accessible (proper ARIA attributes, keyboard navigation)
- NO CSS modules, styled-components, or CSS-in-JS (except Tailwind)
- Biome formatting rules MUST be followed (tabs, double quotes)

### IV. Server-Side Rendering & Data Loading

All routes MUST consider SSR implications. Data required for initial render SHOULD use TanStack Router loaders. The QueryClient integration via `setupRouterSsrQueryIntegration` MUST be maintained. API routes MUST be defined in src/routes/ following TanStack Start conventions.

**Rationale**: SSR improves SEO, performance, and user experience. TanStack Router loaders provide SSR-compatible data fetching. The Router-Query integration ensures proper hydration and cache synchronization.

**Non-negotiable rules**:
- Routes requiring data SHOULD implement loader functions
- API routes MUST use TanStack Start's API route conventions (src/routes/api.*.ts)
- DO NOT fetch data in component useEffect for initial render
- QueryClient MUST remain wrapped in router context as configured in src/router.tsx

### V. AI Integration Standards

AI features MUST use the Vercel AI SDK with Anthropic provider. Model Context Protocol (MCP) integrations MUST use the InMemoryTransport pattern. AI interactions MUST be implemented as API routes with proper error handling and streaming support.

**Rationale**: The Vercel AI SDK provides a unified interface for AI providers with streaming, tool calling, and structured output support. MCP enables extensible context provision to AI models. Centralizing AI logic in API routes ensures security and enables server-side execution.

**Non-negotiable rules**:
- AI provider calls MUST go through Vercel AI SDK
- API keys MUST be server-side only (NO client exposure)
- MCP servers MUST use InMemoryTransport for JSON-RPC communication
- AI features MUST handle streaming responses gracefully
- Reference implementations: src/routes/demo/api.chat.ts, src/utils/mcp-handler.ts

## Development Standards

### Code Quality

- Biome MUST be used for linting and formatting (pnpm check before commits)
- NO unused imports, variables, or dead code
- Functions SHOULD be small, focused, and testable
- Magic numbers MUST be replaced with named constants
- Comments SHOULD explain "why", not "what"

### Testing

- Vitest MUST be used for unit and integration tests
- New features SHOULD include tests if complexity warrants it
- Tests MUST be runnable via `pnpm test`
- NO tests should call external services without mocking
- Test files MUST be colocated or in tests/ directory

### File Organization

- Routes in src/routes/ following TanStack Router file-based conventions
- DO NOT manually edit src/routeTree.gen.ts (auto-generated)
- Shared utilities in src/utils/
- Type definitions in src/types/ or colocated with usage
- Environment variables validated in src/env.ts

### Git & Deployment

- Commit messages SHOULD follow conventional commits (feat:, fix:, docs:, etc.)
- Feature branches SHOULD be named descriptively
- Demo files prefixed with `demo` can be safely deleted
- Cloudflare deployment via `pnpm deploy` (wrangler.jsonc config)

## Quality Gates

Before merging any feature, verify:

1. **Type Safety**: `pnpm build` succeeds with no TypeScript errors
2. **Code Quality**: `pnpm check` passes (Biome linting + formatting)
3. **Tests**: `pnpm test` passes (if tests exist)
4. **Runtime**: `pnpm dev` runs without errors
5. **Constitution Compliance**: All principles above are followed

## Governance

### Amendment Process

This constitution MAY be amended when:
- Project requirements fundamentally change (e.g., moving away from TanStack)
- New TanStack ecosystem tools are adopted project-wide
- Significant architectural patterns need to be codified

Amendments MUST:
- Increment version following semantic versioning
- Document rationale in Sync Impact Report
- Update dependent templates (plan, spec, tasks, checklist)
- Be committed with descriptive message

### Version Semantics

- **MAJOR**: Principle removal or redefinition that breaks existing patterns
- **MINOR**: New principle added or existing principle materially expanded
- **PATCH**: Clarifications, wording improvements, typo fixes

### Compliance Review

All planning documents generated by /speckit commands MUST:
- Reference this constitution in "Constitution Check" sections
- Justify any deviations from principles in "Complexity Tracking"
- Ensure technical decisions align with architecture standards

**Version**: 1.0.0 | **Ratified**: 2025-01-19 | **Last Amended**: 2025-01-19
