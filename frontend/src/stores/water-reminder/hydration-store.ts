import { Store } from "@tanstack/store";
import type {
	HydrationState,
	IntakeLog,
	UserSettings,
} from "@/types/water-reminder";
import { getInitialHydrationState } from "@/types/water-reminder";
import { getCurrentDateString } from "@/utils/water-reminder/date-utils";
import { calculateNextReminder } from "@/utils/water-reminder/reminder-calculator";
import { loadHydration, saveHydration } from "@/utils/water-reminder/storage";

/**
 * Check if the stored date is different from today and reset if needed
 * This handles the daily reset when a new day begins
 */
function checkAndResetForNewDay(state: HydrationState): HydrationState {
	const today = getCurrentDateString();
	if (state.todayDate !== today) {
		// New day - reset hydration tracking
		return {
			...getInitialHydrationState(),
			todayDate: today,
		};
	}
	return state;
}

/**
 * Initialize hydration state from localStorage with daily reset check
 */
function initializeHydrationState(): HydrationState {
	const loaded = loadHydration();
	return checkAndResetForNewDay(loaded);
}

/**
 * TanStack Store for hydration tracking state
 * Initialized from localStorage with automatic daily reset check
 */
export const hydrationStore = new Store<HydrationState>(
	initializeHydrationState(),
);

/**
 * Generate a UUID v4 for intake log entries
 */
function generateUUID(): string {
	return crypto.randomUUID();
}

/**
 * Log a water intake and update state
 * Creates a new intake log entry and updates totals
 * Also recalculates the next reminder time
 * @param amountMl - Amount of water consumed in milliliters
 * @param settings - User settings for reminder calculation
 */
export function logWaterIntake(
	amountMl: number,
	settings?: UserSettings,
): void {
	hydrationStore.setState((state) => {
		// Check for day change before logging
		const currentState = checkAndResetForNewDay(state);

		const now = new Date().toISOString();
		const newLog: IntakeLog = {
			id: generateUUID(),
			timestamp: now,
			amountMl,
		};

		// Calculate next reminder time if settings provided
		const nextReminderTime = settings
			? calculateNextReminder(now, settings)
			: currentState.nextReminderTime;

		const updated: HydrationState = {
			...currentState,
			lastDrinkTime: now,
			todayTotal: currentState.todayTotal + amountMl,
			intakeLogs: [...currentState.intakeLogs, newLog],
			nextReminderTime,
		};

		// Persist to localStorage
		saveHydration(updated);

		return updated;
	});
}

/**
 * Update the next reminder time based on current state and settings
 * @param settings - User settings for reminder calculation
 */
export function updateNextReminderTime(settings: UserSettings): void {
	hydrationStore.setState((state) => {
		const nextReminderTime = calculateNextReminder(
			state.lastDrinkTime,
			settings,
		);
		const updated = { ...state, nextReminderTime };
		saveHydration(updated);
		return updated;
	});
}

/**
 * Get current hydration state (snapshot, not reactive)
 */
export function getHydrationState(): HydrationState {
	return hydrationStore.state;
}

/**
 * Reset hydration tracking for the current day
 */
export function resetTodayHydration(): void {
	hydrationStore.setState(() => {
		const fresh = getInitialHydrationState();
		saveHydration(fresh);
		return fresh;
	});
}

/**
 * Update the next reminder time in state
 * @param time - ISO 8601 datetime string or null to clear
 */
export function setNextReminderTime(time: string | null): void {
	hydrationStore.setState((state) => {
		const updated = { ...state, nextReminderTime: time };
		saveHydration(updated);
		return updated;
	});
}

// ============================================================================
// Derived Values (computed from state + settings)
// ============================================================================

/**
 * Calculate remaining amount to reach daily goal
 * @param todayTotal - Current day's total intake
 * @param dailyGoalMl - Daily goal in ml
 * @returns Remaining ml to reach goal (0 if goal met or exceeded)
 */
export function getRemainingToGoal(
	todayTotal: number,
	dailyGoalMl: number,
): number {
	return Math.max(dailyGoalMl - todayTotal, 0);
}

/**
 * Calculate progress percentage toward daily goal
 * @param todayTotal - Current day's total intake
 * @param dailyGoalMl - Daily goal in ml
 * @returns Percentage (0-100, capped at 100)
 */
export function getProgressPercent(
	todayTotal: number,
	dailyGoalMl: number,
): number {
	return Math.min((todayTotal / dailyGoalMl) * 100, 100);
}

/**
 * Check if daily goal has been met or exceeded
 * @param todayTotal - Current day's total intake
 * @param dailyGoalMl - Daily goal in ml
 * @returns true if goal met or exceeded
 */
export function isGoalMet(todayTotal: number, dailyGoalMl: number): boolean {
	return todayTotal >= dailyGoalMl;
}

/**
 * Calculate excess amount over goal
 * @param todayTotal - Current day's total intake
 * @param dailyGoalMl - Daily goal in ml
 * @returns Excess ml over goal (0 if goal not met)
 */
export function getExcessAmount(
	todayTotal: number,
	dailyGoalMl: number,
): number {
	return Math.max(todayTotal - dailyGoalMl, 0);
}
