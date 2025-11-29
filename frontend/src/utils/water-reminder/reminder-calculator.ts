import type { UserSettings } from "@/types/water-reminder";
import { parseTimeToMinutes } from "./date-utils";

/**
 * Check if the current time is within the sleep period
 * Handles cross-midnight sleep schedules (e.g., 23:00 to 07:00)
 * @param sleepStart - Start time in HH:mm format
 * @param sleepEnd - End time in HH:mm format
 * @returns true if currently in sleep period
 */
export function isInSleepPeriod(sleepStart: string, sleepEnd: string): boolean {
	const now = new Date();
	const currentMinutes = now.getHours() * 60 + now.getMinutes();
	const startMinutes = parseTimeToMinutes(sleepStart);
	const endMinutes = parseTimeToMinutes(sleepEnd);

	// Check if sleep period crosses midnight
	if (startMinutes > endMinutes) {
		// Cross-midnight: sleep is from startMinutes to midnight OR midnight to endMinutes
		return currentMinutes >= startMinutes || currentMinutes < endMinutes;
	}
	// Same-day: sleep is from startMinutes to endMinutes
	return currentMinutes >= startMinutes && currentMinutes < endMinutes;
}

/**
 * Get the next wake-up time as a Date object
 * If wake time has already passed today, returns tomorrow's wake time
 * @param sleepEnd - Wake time in HH:mm format
 * @returns Date object for next wake time
 */
export function getNextWakeTime(sleepEnd: string): Date {
	const now = new Date();
	const [hours, minutes] = sleepEnd.split(":").map(Number);

	const wakeTime = new Date(now);
	wakeTime.setHours(hours, minutes, 0, 0);

	// If wake time has already passed today, move to tomorrow
	if (wakeTime <= now) {
		wakeTime.setDate(wakeTime.getDate() + 1);
	}

	return wakeTime;
}

/**
 * Calculate the next reminder time based on last drink time and user settings
 * Respects sleep schedule - if calculated time falls during sleep, returns wake time
 * @param lastDrinkTime - ISO 8601 timestamp of last drink, or null
 * @param settings - User settings including interval and sleep schedule
 * @returns ISO 8601 timestamp for next reminder, or null if cannot calculate
 */
export function calculateNextReminder(
	lastDrinkTime: string | null,
	settings: UserSettings,
): string | null {
	const now = new Date();
	const { reminderIntervalMinutes, sleepStart, sleepEnd } = settings;

	// If currently in sleep period and no last drink, schedule for wake time
	if (isInSleepPeriod(sleepStart, sleepEnd) && !lastDrinkTime) {
		return getNextWakeTime(sleepEnd).toISOString();
	}

	// Calculate base time for next reminder
	const baseTime = lastDrinkTime ? new Date(lastDrinkTime) : now;

	// Add interval to base time
	const nextReminder = new Date(
		baseTime.getTime() + reminderIntervalMinutes * 60 * 1000,
	);

	// Check if the calculated reminder time falls in sleep period
	if (isReminderInSleepPeriod(nextReminder, sleepStart, sleepEnd)) {
		return getNextWakeTime(sleepEnd).toISOString();
	}

	return nextReminder.toISOString();
}

/**
 * Check if a specific datetime falls within the sleep period
 * @param dateTime - Date object to check
 * @param sleepStart - Start time in HH:mm format
 * @param sleepEnd - End time in HH:mm format
 * @returns true if the datetime is during sleep period
 */
function isReminderInSleepPeriod(
	dateTime: Date,
	sleepStart: string,
	sleepEnd: string,
): boolean {
	const minutes = dateTime.getHours() * 60 + dateTime.getMinutes();
	const startMinutes = parseTimeToMinutes(sleepStart);
	const endMinutes = parseTimeToMinutes(sleepEnd);

	// Check if sleep period crosses midnight
	if (startMinutes > endMinutes) {
		// Cross-midnight: sleep is from startMinutes to midnight OR midnight to endMinutes
		return minutes >= startMinutes || minutes < endMinutes;
	}
	// Same-day: sleep is from startMinutes to endMinutes
	return minutes >= startMinutes && minutes < endMinutes;
}
