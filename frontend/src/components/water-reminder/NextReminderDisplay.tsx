import { Clock } from "lucide-react";
import {
	differenceInMinutes,
	formatTime,
} from "@/utils/water-reminder/date-utils";

export interface NextReminderDisplayProps {
	/** ISO 8601 datetime string for next reminder, null if not set */
	nextReminderTime: string | null;
}

/**
 * Displays the next scheduled reminder time
 * Shows both the time and relative duration until the reminder
 */
export function NextReminderDisplay({
	nextReminderTime,
}: NextReminderDisplayProps) {
	if (!nextReminderTime) {
		return (
			<div className="flex items-center gap-2 text-gray-500">
				<Clock className="h-4 w-4" />
				<span className="text-sm">No reminder scheduled</span>
			</div>
		);
	}

	const reminderDate = new Date(nextReminderTime);
	const now = new Date();
	const minutesUntil = differenceInMinutes(reminderDate, now);

	const isOverdue = minutesUntil < 0;
	const isPast = minutesUntil <= 0;

	const formatRelativeTime = (minutes: number): string => {
		const absMinutes = Math.abs(minutes);
		if (absMinutes < 1) {
			return "now";
		}
		if (absMinutes < 60) {
			return `${absMinutes}m`;
		}
		const hours = Math.floor(absMinutes / 60);
		const mins = absMinutes % 60;
		if (mins === 0) {
			return `${hours}h`;
		}
		return `${hours}h ${mins}m`;
	};

	return (
		<div
			className={`flex items-center gap-2 ${isOverdue ? "text-orange-400" : "text-cyan-400"}`}
		>
			<Clock className="h-4 w-4" />
			<div className="flex flex-col">
				<span className="text-sm font-medium">
					Next reminder: {formatTime(reminderDate)}
				</span>
				<span className="text-xs text-gray-400">
					{isOverdue
						? `Overdue by ${formatRelativeTime(minutesUntil)}`
						: isPast
							? "Due now"
							: `in ${formatRelativeTime(minutesUntil)}`}
				</span>
			</div>
		</div>
	);
}
