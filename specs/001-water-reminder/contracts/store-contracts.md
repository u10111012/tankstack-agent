# Store Contracts: Water Reminder System

**Feature**: 001-water-reminder
**Date**: 2025-11-27

This document defines the TanStack Store contracts for the water reminder feature. Since this is a client-only feature with no API routes, contracts are defined for store interfaces rather than REST endpoints.

## Store: HydrationStore

### State Interface

```typescript
interface HydrationState {
  lastDrinkTime: string | null;      // ISO 8601 timestamp
  todayTotal: number;                 // ml consumed today
  todayDate: string;                  // YYYY-MM-DD
  intakeLogs: IntakeLog[];           // Today's logs
  nextReminderTime: string | null;   // ISO 8601 timestamp
}

interface IntakeLog {
  id: string;                        // UUID
  timestamp: string;                 // ISO 8601
  amountMl: number;                  // ml
}
```

### Actions

#### logWaterIntake(amountMl?: number)

Logs a water intake event.

**Input**:
- `amountMl` (optional): Amount in ml. Defaults to `settingsStore.state.defaultAmountMl`

**State Mutation**:
```typescript
setState((state) => ({
  ...state,
  lastDrinkTime: new Date().toISOString(),
  todayTotal: state.todayTotal + amountMl,
  intakeLogs: [...state.intakeLogs, {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    amountMl,
  }],
  nextReminderTime: calculateNextReminder(/* ... */),
}))
```

**Side Effects**:
- Persists state to localStorage

**Example**:
```typescript
// Quick log with default amount
logWaterIntake()

// Custom amount
logWaterIntake(500)
```

#### resetDaily()

Resets daily counters if date has changed.

**Precondition**: `state.todayDate !== getCurrentDateString()`

**State Mutation**:
```typescript
setState((state) => ({
  ...state,
  todayTotal: 0,
  todayDate: getCurrentDateString(),
  intakeLogs: [],
  // lastDrinkTime preserved
  nextReminderTime: calculateNextReminder(state.lastDrinkTime, /* ... */),
}))
```

**Trigger**: Called on app initialization and periodically

---

## Store: SettingsStore

### State Interface

```typescript
interface UserSettings {
  reminderIntervalMinutes: number;   // 15-480, default 120
  sleepStart: string;                // HH:mm, default "23:00"
  sleepEnd: string;                  // HH:mm, default "07:00"
  dailyGoalMl: number;               // 500-5000, default 2000
  defaultAmountMl: number;           // 50-1000, default 250
}
```

### Actions

#### updateSettings(updates: Partial<UserSettings>)

Updates user settings with validation.

**Input**:
- `updates`: Partial settings object

**Validation**:
```typescript
const UpdatesSchema = UserSettingsSchema.partial()
// Throws ZodError if validation fails
```

**State Mutation**:
```typescript
setState((state) => ({
  ...state,
  ...validatedUpdates,
}))
```

**Side Effects**:
- Persists to localStorage
- Triggers recalculation of `nextReminderTime` in HydrationStore if interval or sleep times changed

**Example**:
```typescript
updateSettings({ reminderIntervalMinutes: 90 })
updateSettings({ sleepStart: "22:00", sleepEnd: "06:00" })
```

#### resetToDefaults()

Resets all settings to default values.

**State Mutation**:
```typescript
setState(() => DEFAULT_SETTINGS)
```

---

## Derived Values

### remainingToGoal (Derived)

```typescript
const remainingToGoal = new Derived({
  fn: () => Math.max(0, settingsStore.state.dailyGoalMl - hydrationStore.state.todayTotal),
  deps: [hydrationStore, settingsStore],
})
```

**Returns**: `number` - Remaining ml to reach daily goal

### progressPercent (Derived)

```typescript
const progressPercent = new Derived({
  fn: () => Math.min(100, (hydrationStore.state.todayTotal / settingsStore.state.dailyGoalMl) * 100),
  deps: [hydrationStore, settingsStore],
})
```

**Returns**: `number` - Progress percentage (0-100, capped)

### isGoalMet (Derived)

```typescript
const isGoalMet = new Derived({
  fn: () => hydrationStore.state.todayTotal >= settingsStore.state.dailyGoalMl,
  deps: [hydrationStore, settingsStore],
})
```

**Returns**: `boolean` - Whether daily goal is met

### formattedNextReminder (Derived)

```typescript
const formattedNextReminder = new Derived({
  fn: () => {
    const { nextReminderTime } = hydrationStore.state
    if (!nextReminderTime) return "No reminder set"
    return formatTime(new Date(nextReminderTime))
  },
  deps: [hydrationStore],
})
```

**Returns**: `string` - Formatted time string (e.g., "16:30")

---

## Utility Functions Contract

### calculateNextReminder

```typescript
function calculateNextReminder(
  lastDrinkTime: string | null,
  reminderIntervalMinutes: number,
  sleepStart: string,
  sleepEnd: string
): string | null
```

**Input**:
- `lastDrinkTime`: ISO 8601 timestamp or null
- `reminderIntervalMinutes`: Interval in minutes
- `sleepStart`: HH:mm format
- `sleepEnd`: HH:mm format

**Output**: ISO 8601 timestamp or null

**Behavior**:
1. If `lastDrinkTime` is null, return null
2. Add interval to last drink time
3. If result falls in sleep period, return wake-up time (next occurrence)
4. Otherwise return calculated time

**Test Cases**:
| lastDrinkTime | interval | sleep | expected |
|---------------|----------|-------|----------|
| "14:00" | 120 | 23:00-07:00 | "16:00" same day |
| "22:00" | 120 | 23:00-07:00 | "07:00" next day |
| "21:30" | 120 | 23:00-07:00 | "23:30" same day |
| null | 120 | 23:00-07:00 | null |
| "23:30" | 120 | 23:00-07:00 | "07:00" next day |

### isInSleepPeriod

```typescript
function isInSleepPeriod(
  time: Date,
  sleepStart: string,
  sleepEnd: string
): boolean
```

**Input**:
- `time`: Date to check
- `sleepStart`: HH:mm format
- `sleepEnd`: HH:mm format

**Output**: `boolean`

**Behavior**:
- Handles cross-midnight sleep periods (e.g., 23:00-07:00)
- Returns true if time falls within sleep window

---

## localStorage Keys

| Key | Schema | Description |
|-----|--------|-------------|
| `water-reminder-settings` | `UserSettingsSchema` | User preferences |
| `water-reminder-hydration` | `HydrationStateSchema` | Current hydration state |

### Storage Interface

```typescript
interface StorageService {
  loadSettings(): UserSettings;
  saveSettings(settings: UserSettings): void;
  loadHydration(): HydrationState;
  saveHydration(state: HydrationState): void;
  clearAll(): void;
}
```

**Validation**: All load operations validate against Zod schemas, returning defaults on parse failure.

---

## Component Props Contracts

### WaterLogButton

```typescript
interface WaterLogButtonProps {
  onLog?: (amountMl: number) => void;
  disabled?: boolean;
}
```

### IntakeAmountSelector

```typescript
interface IntakeAmountSelectorProps {
  onSelect: (amountMl: number) => void;
  defaultAmount?: number;
  presets?: number[];  // Default: [100, 250, 500, 750]
}
```

### DailyProgress

```typescript
interface DailyProgressProps {
  current: number;
  goal: number;
  showRemaining?: boolean;
}
```

### NextReminderDisplay

```typescript
interface NextReminderDisplayProps {
  nextTime: string | null;
  isOverdue?: boolean;
}
```

### SettingsPanel

```typescript
interface SettingsPanelProps {
  settings: UserSettings;
  onSave: (updates: Partial<UserSettings>) => void;
  onReset?: () => void;
}
```