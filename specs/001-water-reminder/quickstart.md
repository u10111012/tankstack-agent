# Quickstart: Water Reminder System

**Feature**: 001-water-reminder
**Date**: 2025-11-27

This guide provides a step-by-step quickstart for implementing the Water Reminder System feature.

## Prerequisites

1. **shadcn/ui Components**: Add required components if not present:
   ```bash
   pnpx shadcn@latest add progress
   pnpx shadcn@latest add card
   ```

2. **Verify Dependencies**: Already installed in project:
   - `@tanstack/store` (v0.7.0)
   - `@tanstack/react-store` (v0.7.0)
   - `zod` (v3.23.8)

## Step 1: Create Types and Schemas

Create `src/types/water-reminder.ts`:

```typescript
import { z } from "zod"

// Schemas
export const UserSettingsSchema = z.object({
  reminderIntervalMinutes: z.number().min(15).max(480).default(120),
  sleepStart: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("23:00"),
  sleepEnd: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("07:00"),
  dailyGoalMl: z.number().min(500).max(5000).default(2000),
  defaultAmountMl: z.number().min(50).max(1000).default(250),
})

export const IntakeLogSchema = z.object({
  id: z.string().uuid(),
  timestamp: z.string().datetime(),
  amountMl: z.number().min(1).max(2000),
})

export const HydrationStateSchema = z.object({
  lastDrinkTime: z.string().datetime().nullable(),
  todayTotal: z.number().min(0).default(0),
  todayDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  intakeLogs: z.array(IntakeLogSchema).default([]),
  nextReminderTime: z.string().datetime().nullable(),
})

// Types
export type UserSettings = z.infer<typeof UserSettingsSchema>
export type IntakeLog = z.infer<typeof IntakeLogSchema>
export type HydrationState = z.infer<typeof HydrationStateSchema>

// Defaults
export const DEFAULT_SETTINGS: UserSettings = {
  reminderIntervalMinutes: 120,
  sleepStart: "23:00",
  sleepEnd: "07:00",
  dailyGoalMl: 2000,
  defaultAmountMl: 250,
}
```

## Step 2: Create Utility Functions

Create `src/utils/water-reminder/reminder-calculator.ts`:

```typescript
export function calculateNextReminder(
  lastDrinkTime: string | null,
  reminderIntervalMinutes: number,
  sleepStart: string,
  sleepEnd: string
): string | null {
  if (!lastDrinkTime) return null

  const lastDrink = new Date(lastDrinkTime)
  const nextReminder = new Date(lastDrink.getTime() + reminderIntervalMinutes * 60 * 1000)

  if (isInSleepPeriod(nextReminder, sleepStart, sleepEnd)) {
    return getNextWakeTime(nextReminder, sleepEnd).toISOString()
  }

  return nextReminder.toISOString()
}

export function isInSleepPeriod(
  time: Date,
  sleepStart: string,
  sleepEnd: string
): boolean {
  const timeMinutes = time.getHours() * 60 + time.getMinutes()
  const startMinutes = parseTimeToMinutes(sleepStart)
  const endMinutes = parseTimeToMinutes(sleepEnd)

  // Handle cross-midnight sleep (e.g., 23:00-07:00)
  if (startMinutes > endMinutes) {
    return timeMinutes >= startMinutes || timeMinutes < endMinutes
  }
  return timeMinutes >= startMinutes && timeMinutes < endMinutes
}

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

function getNextWakeTime(fromDate: Date, sleepEnd: string): Date {
  const [hours, minutes] = sleepEnd.split(":").map(Number)
  const wakeTime = new Date(fromDate)
  wakeTime.setHours(hours, minutes, 0, 0)

  // If wake time is before fromDate, it's tomorrow
  if (wakeTime <= fromDate) {
    wakeTime.setDate(wakeTime.getDate() + 1)
  }

  return wakeTime
}
```

Create `src/utils/water-reminder/storage.ts`:

```typescript
import { UserSettingsSchema, HydrationStateSchema, DEFAULT_SETTINGS } from "@/types/water-reminder"
import type { UserSettings, HydrationState } from "@/types/water-reminder"

const SETTINGS_KEY = "water-reminder-settings"
const HYDRATION_KEY = "water-reminder-hydration"

export function loadSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (!raw) return DEFAULT_SETTINGS
    return UserSettingsSchema.parse(JSON.parse(raw))
  } catch {
    return DEFAULT_SETTINGS
  }
}

export function saveSettings(settings: UserSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
}

export function loadHydration(): HydrationState {
  try {
    const raw = localStorage.getItem(HYDRATION_KEY)
    if (!raw) return getInitialHydrationState()
    return HydrationStateSchema.parse(JSON.parse(raw))
  } catch {
    return getInitialHydrationState()
  }
}

export function saveHydration(state: HydrationState): void {
  localStorage.setItem(HYDRATION_KEY, JSON.stringify(state))
}

function getInitialHydrationState(): HydrationState {
  return {
    lastDrinkTime: null,
    todayTotal: 0,
    todayDate: new Date().toISOString().split("T")[0],
    intakeLogs: [],
    nextReminderTime: null,
  }
}
```

## Step 3: Create TanStack Stores

Create `src/stores/water-reminder/settings-store.ts`:

```typescript
import { Store } from "@tanstack/store"
import { loadSettings, saveSettings } from "@/utils/water-reminder/storage"
import type { UserSettings } from "@/types/water-reminder"

export const settingsStore = new Store<UserSettings>(loadSettings())

export function updateSettings(updates: Partial<UserSettings>): void {
  settingsStore.setState((state) => {
    const newState = { ...state, ...updates }
    saveSettings(newState)
    return newState
  })
}

export function resetSettings(): void {
  const defaults = loadSettings() // Will return defaults
  settingsStore.setState(() => defaults)
  saveSettings(defaults)
}
```

Create `src/stores/water-reminder/hydration-store.ts`:

```typescript
import { Store, Derived } from "@tanstack/store"
import { loadHydration, saveHydration } from "@/utils/water-reminder/storage"
import { calculateNextReminder } from "@/utils/water-reminder/reminder-calculator"
import { settingsStore } from "./settings-store"
import type { HydrationState } from "@/types/water-reminder"

export const hydrationStore = new Store<HydrationState>(loadHydration())

// Initialize daily reset check
checkDailyReset()

export function logWaterIntake(amountMl?: number): void {
  const amount = amountMl ?? settingsStore.state.defaultAmountMl
  const { reminderIntervalMinutes, sleepStart, sleepEnd } = settingsStore.state
  const now = new Date().toISOString()

  hydrationStore.setState((state) => {
    const newState: HydrationState = {
      ...state,
      lastDrinkTime: now,
      todayTotal: state.todayTotal + amount,
      intakeLogs: [...state.intakeLogs, {
        id: crypto.randomUUID(),
        timestamp: now,
        amountMl: amount,
      }],
      nextReminderTime: calculateNextReminder(now, reminderIntervalMinutes, sleepStart, sleepEnd),
    }
    saveHydration(newState)
    return newState
  })
}

function checkDailyReset(): void {
  const currentDate = new Date().toISOString().split("T")[0]
  const { todayDate, lastDrinkTime } = hydrationStore.state
  const { reminderIntervalMinutes, sleepStart, sleepEnd } = settingsStore.state

  if (todayDate !== currentDate) {
    hydrationStore.setState((state) => {
      const newState: HydrationState = {
        ...state,
        todayTotal: 0,
        todayDate: currentDate,
        intakeLogs: [],
        nextReminderTime: calculateNextReminder(lastDrinkTime, reminderIntervalMinutes, sleepStart, sleepEnd),
      }
      saveHydration(newState)
      return newState
    })
  }
}

// Derived values
export const remainingToGoal = new Derived({
  fn: () => Math.max(0, settingsStore.state.dailyGoalMl - hydrationStore.state.todayTotal),
  deps: [hydrationStore, settingsStore],
})
remainingToGoal.mount()

export const progressPercent = new Derived({
  fn: () => Math.min(100, (hydrationStore.state.todayTotal / settingsStore.state.dailyGoalMl) * 100),
  deps: [hydrationStore, settingsStore],
})
progressPercent.mount()

export const isGoalMet = new Derived({
  fn: () => hydrationStore.state.todayTotal >= settingsStore.state.dailyGoalMl,
  deps: [hydrationStore, settingsStore],
})
isGoalMet.mount()
```

## Step 4: Create Route

Create `src/routes/water-reminder.tsx`:

```typescript
import { createFileRoute } from "@tanstack/react-router"
import { useStore } from "@tanstack/react-store"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  hydrationStore,
  logWaterIntake,
  remainingToGoal,
  progressPercent,
} from "@/stores/water-reminder/hydration-store"
import { settingsStore } from "@/stores/water-reminder/settings-store"
import { Droplet } from "lucide-react"

export const Route = createFileRoute("/water-reminder")({
  component: WaterReminderPage,
})

function WaterReminderPage() {
  const todayTotal = useStore(hydrationStore, (s) => s.todayTotal)
  const nextReminderTime = useStore(hydrationStore, (s) => s.nextReminderTime)
  const dailyGoal = useStore(settingsStore, (s) => s.dailyGoalMl)
  const remaining = useStore(remainingToGoal)
  const progress = useStore(progressPercent)

  const handleQuickLog = () => logWaterIntake()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="text-blue-500" />
              Water Reminder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {todayTotal}ml
              </div>
              <div className="text-gray-500">of {dailyGoal}ml goal</div>
            </div>

            <Progress value={progress} className="h-3" />

            <div className="text-center text-sm text-gray-600">
              {remaining > 0 ? `${remaining}ml remaining` : "Goal reached!"}
            </div>

            <Button
              onClick={handleQuickLog}
              className="w-full h-16 text-lg"
              size="lg"
            >
              <Droplet className="mr-2" />
              Log Water (250ml)
            </Button>

            {nextReminderTime && (
              <div className="text-center text-sm text-gray-500">
                Next reminder: {new Date(nextReminderTime).toLocaleTimeString()}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

## Step 5: Test the Feature

1. Start development server:
   ```bash
   pnpm dev
   ```

2. Navigate to `http://localhost:3000/water-reminder`

3. Verify:
   - [x] Progress bar shows 0% initially
   - [x] "Log Water" button increases total by 250ml
   - [x] Progress updates correctly
   - [x] Refresh page → data persists
   - [x] Next reminder time displays

## Next Steps

After basic functionality works:

1. Add custom amount selector
2. Add settings panel
3. Add intake history display
4. Implement notification system (future enhancement)

## Directory Structure Created

```
src/
├── routes/
│   └── water-reminder.tsx
├── stores/
│   └── water-reminder/
│       ├── hydration-store.ts
│       └── settings-store.ts
├── utils/
│   └── water-reminder/
│       ├── reminder-calculator.ts
│       └── storage.ts
└── types/
    └── water-reminder.ts
```
