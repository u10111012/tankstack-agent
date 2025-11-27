# Data Model: Water Reminder System

**Feature**: 001-water-reminder
**Date**: 2025-11-27

## Entity Overview

```
┌─────────────────────┐      ┌─────────────────────┐
│   UserSettings      │      │   HydrationState    │
├─────────────────────┤      ├─────────────────────┤
│ reminderInterval    │      │ lastDrinkTime       │
│ sleepStart          │      │ todayTotal          │
│ sleepEnd            │      │ todayDate           │
│ dailyGoalMl         │      │ intakeLogs[]        │
│ defaultAmountMl     │      │ nextReminderTime    │
└─────────────────────┘      └─────────────────────┘
           │                            │
           └──────────┬─────────────────┘
                      ▼
           ┌─────────────────────┐
           │   IntakeLog         │
           ├─────────────────────┤
           │ id                  │
           │ timestamp           │
           │ amountMl            │
           └─────────────────────┘
```

## Entities

### UserSettings

User preferences for reminder scheduling and hydration goals.

| Field | Type | Default | Validation | Description |
|-------|------|---------|------------|-------------|
| reminderIntervalMinutes | number | 120 | min: 15, max: 480 | Minutes between reminders |
| sleepStart | string | "23:00" | HH:mm format | Sleep period start time |
| sleepEnd | string | "07:00" | HH:mm format | Sleep period end (wake-up) |
| dailyGoalMl | number | 2000 | min: 500, max: 5000 | Daily hydration target in ml |
| defaultAmountMl | number | 250 | min: 50, max: 1000 | Default intake amount for quick log |

**Persistence**: localStorage key `water-reminder-settings`

**Zod Schema**:
```typescript
const UserSettingsSchema = z.object({
  reminderIntervalMinutes: z.number().min(15).max(480).default(120),
  sleepStart: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("23:00"),
  sleepEnd: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).default("07:00"),
  dailyGoalMl: z.number().min(500).max(5000).default(2000),
  defaultAmountMl: z.number().min(50).max(1000).default(250),
})
```

### IntakeLog

Individual water drinking event record.

| Field | Type | Validation | Description |
|-------|------|------------|-------------|
| id | string | UUID format | Unique identifier for the log entry |
| timestamp | string | ISO 8601 | When the water was consumed |
| amountMl | number | min: 1, max: 2000 | Volume of water in milliliters |

**Persistence**: Part of HydrationState in localStorage

**Zod Schema**:
```typescript
const IntakeLogSchema = z.object({
  id: z.string().uuid(),
  timestamp: z.string().datetime(),
  amountMl: z.number().min(1).max(2000),
})
```

### HydrationState

Current hydration tracking state (runtime + persisted).

| Field | Type | Description |
|-------|------|-------------|
| lastDrinkTime | string \| null | ISO 8601 timestamp of most recent intake |
| todayTotal | number | Total ml consumed today |
| todayDate | string | Date string (YYYY-MM-DD) for daily reset detection |
| intakeLogs | IntakeLog[] | Today's intake log entries |
| nextReminderTime | string \| null | Calculated next reminder (ISO 8601) |

**Persistence**: localStorage key `water-reminder-hydration`

**Zod Schema**:
```typescript
const HydrationStateSchema = z.object({
  lastDrinkTime: z.string().datetime().nullable(),
  todayTotal: z.number().min(0).default(0),
  todayDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  intakeLogs: z.array(IntakeLogSchema).default([]),
  nextReminderTime: z.string().datetime().nullable(),
})
```

## Derived Values

Computed from the base entities, not stored separately.

### DailyProgress

| Derived Field | Computation |
|---------------|-------------|
| progressPercent | `(todayTotal / dailyGoalMl) * 100` |
| remainingMl | `Math.max(0, dailyGoalMl - todayTotal)` |
| isGoalMet | `todayTotal >= dailyGoalMl` |
| excessMl | `Math.max(0, todayTotal - dailyGoalMl)` |

### ReminderStatus

| Derived Field | Computation |
|---------------|-------------|
| isOverdue | `nextReminderTime && new Date() > new Date(nextReminderTime)` |
| timeUntilReminder | `nextReminderTime ? differenceInMinutes(nextReminderTime, now) : null` |
| formattedNextReminder | `nextReminderTime ? formatTime(nextReminderTime) : 'Not set'` |

## State Transitions

### Log Water Intake

```
Trigger: User taps "Log Water" button
Input: amountMl (optional, defaults to defaultAmountMl)

State Changes:
1. Create new IntakeLog { id: uuid(), timestamp: now(), amountMl }
2. Add to intakeLogs array
3. Update todayTotal += amountMl
4. Update lastDrinkTime = now()
5. Recalculate nextReminderTime

Persist: HydrationState to localStorage
```

### Settings Update

```
Trigger: User saves settings changes
Input: Partial<UserSettings>

State Changes:
1. Merge new settings with existing
2. Validate merged settings with Zod
3. If reminderInterval/sleep times changed:
   - Recalculate nextReminderTime

Persist: UserSettings to localStorage
```

### Daily Reset

```
Trigger: App loads or state accessed when todayDate !== current date
Input: None (automatic)

State Changes:
1. Clear intakeLogs array
2. Reset todayTotal = 0
3. Update todayDate = current date
4. Keep lastDrinkTime (for reminder calculation)
5. Recalculate nextReminderTime

Persist: HydrationState to localStorage
```

### Calculate Next Reminder

```
Trigger: After water intake logged or settings changed
Input: lastDrinkTime, reminderIntervalMinutes, sleepStart, sleepEnd

Output: nextReminderTime (ISO 8601 string)

Algorithm:
1. If no lastDrinkTime: return null (no reminder until first intake)
2. rawNextTime = lastDrinkTime + reminderIntervalMinutes
3. If rawNextTime falls in sleep period:
   - Return sleepEnd time (next day if needed)
4. Return rawNextTime
```

## localStorage Schema

### Key: `water-reminder-settings`
```json
{
  "reminderIntervalMinutes": 120,
  "sleepStart": "23:00",
  "sleepEnd": "07:00",
  "dailyGoalMl": 2000,
  "defaultAmountMl": 250
}
```

### Key: `water-reminder-hydration`
```json
{
  "lastDrinkTime": "2025-11-27T14:30:00.000Z",
  "todayTotal": 750,
  "todayDate": "2025-11-27",
  "intakeLogs": [
    { "id": "uuid-1", "timestamp": "2025-11-27T09:00:00.000Z", "amountMl": 250 },
    { "id": "uuid-1", "timestamp": "2025-11-27T11:00:00.000Z", "amountMl": 250 },
    { "id": "uuid-3", "timestamp": "2025-11-27T14:30:00.000Z", "amountMl": 250 }
  ],
  "nextReminderTime": "2025-11-27T16:30:00.000Z"
}
```

## Validation Rules Summary

| Entity | Field | Rule | Error Message |
|--------|-------|------|---------------|
| UserSettings | reminderIntervalMinutes | 15-480 | "Interval must be 15-480 minutes" |
| UserSettings | sleepStart/End | HH:mm format | "Invalid time format" |
| UserSettings | dailyGoalMl | 500-5000 | "Goal must be 500-5000ml" |
| UserSettings | defaultAmountMl | 50-1000 | "Amount must be 50-1000ml" |
| IntakeLog | amountMl | 1-2000 | "Amount must be 1-2000ml" |
| IntakeLog | timestamp | ISO 8601 | "Invalid timestamp" |
| HydrationState | todayDate | YYYY-MM-DD | "Invalid date format" |