# Implementation Plan: Water Reminder System

**Branch**: `001-water-reminder` | **Date**: 2025-11-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-water-reminder/spec.md`

## Summary

A water reminder system that allows users to log water intake with timestamps, calculates intelligent next-reminder times respecting sleep schedules, and provides daily hydration statistics with goal tracking. Built as a TanStack Start web application with client-side state persistence using TanStack Store and localStorage.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode)
**Primary Dependencies**: TanStack Start, TanStack Router, TanStack Store, TanStack Query, shadcn/ui, Tailwind CSS v4

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Pre-Design Check (Phase 0)

### I. TanStack-First Architecture
- [x] **PASS**: Uses TanStack Router for routing (new route in src/routes/)
- [x] **PASS**: Uses TanStack Store for client state (hydration data, settings)
- [x] **PASS**: No Redux/MobX/Zustand introduced
- [N/A] TanStack Query: Not required for this feature (no server state)
- [N/A] TanStack Form: Settings form is simple, can use native form + TanStack Store
- [N/A] TanStack Table: No tabular data display required

### II. Type Safety & Runtime Validation
- [x] **PASS**: TypeScript strict mode
- [x] **PASS**: Zod schemas for localStorage data validation (intake logs, settings)
- [x] **PASS**: No `any` types
- [N/A] API route validation: No API routes for this feature (client-only)
- [x] **PASS**: T3 Env for any new environment variables (none required)

### III. Component Architecture & Styling
- [x] **PASS**: shadcn/ui components (Button, Card, Progress, Input)
- [x] **PASS**: Tailwind CSS v4 for styling
- [x] **PASS**: CVA for component variants if needed
- [x] **PASS**: Accessibility (ARIA, keyboard navigation)
- [x] **PASS**: Biome formatting rules

### IV. Server-Side Rendering & Data Loading
- [x] **PASS**: Route follows file-based routing convention
- [N/A] Loader functions: Client-only data from localStorage (no SSR data)
- [N/A] API routes: No server-side API for this feature
- [x] **PASS**: No useEffect for initial render data (use TanStack Store)

### V. AI Integration Standards
- [N/A] No AI features in this implementation

**Gate Status**: PASSED - All applicable principles satisfied.

---

### Post-Design Check (Phase 1)

After completing Phase 1 design (data-model.md, contracts, quickstart.md):

### I. TanStack-First Architecture
- [x] **PASS**: Route defined at `src/routes/water-reminder.tsx`
- [x] **PASS**: TanStack Store pattern used (hydrationStore, settingsStore with Derived values)
- [x] **PASS**: useStore hook for reactive component updates
- [x] **PASS**: No external state management libraries

### II. Type Safety & Runtime Validation
- [x] **PASS**: Zod schemas defined for all data structures (UserSettingsSchema, IntakeLogSchema, HydrationStateSchema)
- [x] **PASS**: All localStorage load operations validate with Zod
- [x] **PASS**: Type inference from schemas (z.infer)

### III. Component Architecture & Styling
- [x] **PASS**: Uses existing shadcn/ui Button, Input, Label, Switch, Slider
- [x] **PASS**: Requires adding Progress and Card components via shadcn CLI
- [x] **PASS**: Components organized in src/components/water-reminder/
- [x] **PASS**: Props contracts defined in store-contracts.md

### IV. Server-Side Rendering & Data Loading
- [x] **PASS**: Client-side data loading from localStorage (SSR-safe)
- [x] **PASS**: No useEffect for data fetching - TanStack Store handles state

### V. Development Standards
- [x] **PASS**: Tests defined for reminder-calculator (unit) and hydration-store (integration)
- [x] **PASS**: File organization follows constitution guidelines
- [x] **PASS**: Utility functions are pure and testable

**Post-Design Gate Status**: PASSED - Design adheres to all constitution principles.

## Project Structure

### Documentation (this feature)

```text
specs/001-water-reminder/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (store contracts)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── routes/
│   └── water-reminder.tsx     # Main page route
├── components/
│   └── water-reminder/
│       ├── WaterLogButton.tsx      # Quick log button component
│       ├── IntakeAmountSelector.tsx # Custom amount selector
│       ├── DailyProgress.tsx       # Progress visualization
│       ├── NextReminderDisplay.tsx # Next reminder time display
│       └── SettingsPanel.tsx       # Settings configuration
├── stores/
│   └── water-reminder/
│       ├── hydration-store.ts      # TanStack Store for hydration state
│       └── settings-store.ts       # TanStack Store for user settings
├── utils/
│   └── water-reminder/
│       ├── reminder-calculator.ts  # Reminder time calculation logic
│       ├── storage.ts              # localStorage persistence utilities
│       └── date-utils.ts           # Date/time helper functions
└── types/
    └── water-reminder.ts           # Type definitions and Zod schemas

tests/
├── unit/
│   └── water-reminder/
│       ├── reminder-calculator.test.ts
│       └── date-utils.test.ts
└── integration/
    └── water-reminder/
        └── hydration-store.test.ts
```

**Structure Decision**: Single TanStack Start project following existing conventions. Feature-specific components, stores, and utilities are organized in dedicated subdirectories to maintain separation from existing demo code. Uses TanStack Store pattern consistent with existing project architecture.

## Complexity Tracking

> No violations to track - all choices align with constitution principles.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |