import { z } from "zod";

// ============================================================================
// Zod Schemas
// ============================================================================

/**
 * Schema for user settings - preferences for reminder scheduling and hydration goals
 */
export const UserSettingsSchema = z.object({
	/** Minutes between reminders (15-480, default 120 = 2 hours) */
	reminderIntervalMinutes: z.number().min(15).max(480).default(120),
	/** Sleep period start time in HH:mm format (default "23:00") */
	sleepStart: z
		.string()
		.regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
		.default("23:00"),
	/** Sleep period end/wake-up time in HH:mm format (default "07:00") */
	sleepEnd: z
		.string()
		.regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
		.default("07:00"),
	/** Daily hydration goal in ml (500-5000, default 2000) */
	dailyGoalMl: z.number().min(500).max(5000).default(2000),
	/** Default intake amount for quick log in ml (50-1000, default 250) */
	defaultAmountMl: z.number().min(50).max(1000).default(250),
});

/**
 * Schema for a single water intake log entry
 */
export const IntakeLogSchema = z.object({
	/** Unique identifier for the log entry (UUID) */
	id: z.string().uuid(),
	/** ISO 8601 timestamp when the water was consumed */
	timestamp: z.string().datetime(),
	/** Volume of water consumed in milliliters */
	amountMl: z.number().min(1).max(2000),
});

/**
 * Schema for current hydration tracking state
 */
export const HydrationStateSchema = z.object({
	/** ISO 8601 timestamp of most recent water intake, null if never logged */
	lastDrinkTime: z.string().datetime().nullable(),
	/** Total ml consumed today */
	todayTotal: z.number().min(0).default(0),
	/** Date string (YYYY-MM-DD) for daily reset detection */
	todayDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	/** Today's intake log entries */
	intakeLogs: z.array(IntakeLogSchema).default([]),
	/** Calculated next reminder time (ISO 8601), null if not set */
	nextReminderTime: z.string().datetime().nullable(),
});

// ============================================================================
// TypeScript Types (inferred from schemas)
// ============================================================================

export type UserSettings = z.infer<typeof UserSettingsSchema>;
export type IntakeLog = z.infer<typeof IntakeLogSchema>;
export type HydrationState = z.infer<typeof HydrationStateSchema>;

// ============================================================================
// Default Values
// ============================================================================

/**
 * Default user settings - sensible defaults for new users
 */
export const DEFAULT_SETTINGS: UserSettings = {
	reminderIntervalMinutes: 120, // 2 hours
	sleepStart: "23:00",
	sleepEnd: "07:00",
	dailyGoalMl: 2000,
	defaultAmountMl: 250, // Standard glass
};

/**
 * Get initial hydration state for a new day
 */
export function getInitialHydrationState(): HydrationState {
	return {
		lastDrinkTime: null,
		todayTotal: 0,
		todayDate: new Date().toISOString().split("T")[0],
		intakeLogs: [],
		nextReminderTime: null,
	};
}

// ============================================================================
// localStorage Keys
// ============================================================================

export const STORAGE_KEYS = {
	SETTINGS: "water-reminder-settings",
	HYDRATION: "water-reminder-hydration",
} as const;
