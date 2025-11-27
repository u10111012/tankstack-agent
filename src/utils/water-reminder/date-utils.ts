/**
 * Parse HH:mm time string to minutes since midnight
 * @example parseTimeToMinutes("14:30") => 870
 */
export function parseTimeToMinutes(time: string): number {
	const [hours, minutes] = time.split(":").map(Number);
	return hours * 60 + minutes;
}

/**
 * Get current date as YYYY-MM-DD string
 * @example getCurrentDateString() => "2025-11-27"
 */
export function getCurrentDateString(): string {
	return new Date().toISOString().split("T")[0];
}

/**
 * Format a Date object to display time string (HH:mm)
 * @example formatTime(new Date("2025-11-27T14:30:00")) => "14:30"
 */
export function formatTime(date: Date): string {
	return date.toLocaleTimeString("en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
}

/**
 * Format a Date object to display date and time
 * @example formatDateTime(new Date("2025-11-27T14:30:00")) => "Nov 27, 14:30"
 */
export function formatDateTime(date: Date): string {
	return (
		date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		}) +
		", " +
		formatTime(date)
	);
}

/**
 * Get the difference in minutes between two dates
 */
export function differenceInMinutes(date1: Date, date2: Date): number {
	return Math.round((date1.getTime() - date2.getTime()) / (1000 * 60));
}

/**
 * Format minutes to human-readable duration
 * @example formatDuration(90) => "1h 30m"
 * @example formatDuration(45) => "45m"
 */
export function formatDuration(minutes: number): string {
	if (minutes < 60) {
		return `${minutes}m`;
	}
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	if (mins === 0) {
		return `${hours}h`;
	}
	return `${hours}h ${mins}m`;
}
