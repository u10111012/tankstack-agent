# Research: Water Reminder System

**Feature**: 001-water-reminder
**Date**: 2025-11-27

## Research Topics

### 1. TanStack Store for Client State Management

**Decision**: Use TanStack Store (`@tanstack/store` + `@tanstack/react-store`) for managing hydration state and user settings.

**Rationale**:
- Already installed in the project (v0.7.0)
- Constitution mandates TanStack-first architecture for client state
- Existing demo implementation at `src/lib/demo-store.ts` shows the pattern
- Supports derived state via `Derived` class for computed values (e.g., remaining amount to goal)
- Integrates with `useStore` hook for reactive React components

**Alternatives Considered**:
- Zustand: Rejected - Constitution explicitly prohibits introducing Zustand
- Redux: Rejected - Constitution explicitly prohibits Redux
- React Context: Less suitable for frequent updates like water intake tracking

**Implementation Pattern** (from existing codebase):
```typescript
import { Store, Derived } from '@tanstack/store'
import { useStore } from '@tanstack/react-store'

// Create store with initial state
export const hydrationStore = new Store({ /* state */ })

// Create derived values
export const remainingAmount = new Derived({
  fn: () => /* computed logic */,
  deps: [hydrationStore],
})
remainingAmount.mount()

// In components: useStore(hydrationStore, (state) => state.someField)
```

### 2. localStorage Persistence Strategy

**Decision**: Use localStorage with Zod schema validation for data persistence.

**Rationale**:
- No backend required for MVP - keeps feature simple and offline-capable
- Constitution requires Zod for runtime validation at data boundaries
- localStorage persists across browser sessions
- JSON serialization works well with structured hydration data

**Alternatives Considered**:
- IndexedDB: Overkill for simple key-value storage of settings and daily logs
- Session storage: Would lose data on tab close
- Backend API with TanStack Query: More complexity than needed for single-user local data

**Implementation Pattern**:
```typescript
import { z } from 'zod'

const SettingsSchema = z.object({
  reminderIntervalMinutes: z.number().min(15).max(480),
  sleepStart: z.string(), // HH:mm format
  sleepEnd: z.string(),
  dailyGoalMl: z.number().min(500).max(5000),
})

// Load with validation
function loadSettings(): Settings {
  const raw = localStorage.getItem('water-reminder-settings')
  if (!raw) return DEFAULT_SETTINGS
  return SettingsSchema.parse(JSON.parse(raw))
}
```

### 3. Reminder Time Calculation Algorithm

**Decision**: Implement pure calculation function with sleep period boundary detection.

**Rationale**:
- Core business logic must be 100% accurate per success criteria
- Pure function enables easy unit testing
- Must handle edge cases: cross-midnight, sleep period overlap

**Algorithm Specification**:
```
Input: lastDrinkTime, reminderIntervalMinutes, sleepStart, sleepEnd
Output: nextReminderTime

1. Calculate raw next time = lastDrinkTime + reminderIntervalMinutes
2. If raw next time is within sleep period:
   - If sleepEnd is next day (sleepStart > sleepEnd), add 1 day to sleepEnd
   - Set next time = sleepEnd (wake-up time)
3. Return next time
```

**Edge Cases Handled**:
- Reminder during sleep (23:00-07:00): Skip to 07:00
- Cross-midnight sleep (22:00-06:00): Correctly spans days
- Logging during sleep: Still records, calculates next from that time
- Very long intervals (>awake period): Caps at wake-up time

### 4. UI Component Architecture

**Decision**: Use shadcn/ui components with feature-specific wrappers.

**Rationale**:
- Constitution requires shadcn/ui for new UI components
- Existing components available: Button, Input, Label, Switch, Slider
- Progress component may need to be added via `pnpx shadcn@latest add progress`
- Card component may need to be added via `pnpx shadcn@latest add card`

**Components Needed**:
| Component | Source | Purpose |
|-----------|--------|---------|
| Button | Existing | Quick log action, settings confirm |
| Input | Existing | Custom amount input, time inputs |
| Slider | Existing | Reminder interval selection |
| Switch | Existing | Enable/disable reminders |
| Progress | To add | Daily goal visualization |
| Card | To add | Container for sections |

### 5. Date/Time Handling

**Decision**: Use native JavaScript Date with helper utilities for time comparisons.

**Rationale**:
- No external date library needed for simple time comparisons
- Reduces bundle size
- Local timezone handling is straightforward with Date
- Constitution doesn't mandate a specific date library

**Key Utilities Needed**:
```typescript
// Parse HH:mm string to minutes since midnight
function parseTimeToMinutes(time: string): number

// Check if a time falls within sleep period
function isInSleepPeriod(time: Date, sleepStart: string, sleepEnd: string): boolean

// Get next occurrence of a time (today or tomorrow)
function getNextOccurrence(time: string): Date

// Format Date to display string
function formatTime(date: Date): string
```

### 6. Daily Reset Logic

**Decision**: Implement midnight detection with conditional reset.

**Rationale**:
- Spec requires daily totals reset at midnight
- Last drinking time persists for reminder calculation
- Store last recorded date to detect day change

**Implementation Pattern**:
```typescript
// On app load or store access:
const storedDate = storage.getLastRecordedDate()
const today = new Date().toDateString()

if (storedDate !== today) {
  hydrationStore.setState(state => ({
    ...state,
    todayTotal: 0,
    todayDate: today,
    // Keep lastDrinkTime for reminder calculation
  }))
}
```

### 7. File Structure Decision

**Decision**: Organize feature code in dedicated subdirectories.

**Rationale**:
- Constitution requires separation from demo code
- Feature-specific organization improves maintainability
- Follows TanStack Router file-based routing convention

**Final Structure**:
```
src/
├── routes/
│   └── water-reminder.tsx          # Main route
├── components/
│   └── water-reminder/             # Feature components
├── stores/
│   └── water-reminder/             # Feature stores
├── utils/
│   └── water-reminder/             # Feature utilities
└── types/
    └── water-reminder.ts           # Types and schemas
```

## Dependencies to Add

| Dependency | Version | Purpose | Action |
|------------|---------|---------|--------|
| shadcn/ui Progress | latest | Goal progress display | `pnpx shadcn@latest add progress` |
| shadcn/ui Card | latest | Section containers | `pnpx shadcn@latest add card` |

## Open Questions Resolved

All technical questions have been resolved through research:

1. **State management approach**: TanStack Store (mandated by constitution)
2. **Persistence strategy**: localStorage with Zod validation
3. **Date/time library**: Native JavaScript Date (sufficient for requirements)
4. **Reminder algorithm**: Pure function with sleep boundary detection
5. **Component library**: shadcn/ui (mandated by constitution)

## Next Phase

Ready for Phase 1: Generate data-model.md and API contracts.