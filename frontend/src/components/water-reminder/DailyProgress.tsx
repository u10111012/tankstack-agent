import { CheckCircle2, Droplet } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export interface DailyProgressProps {
	/** Current total intake in ml */
	todayTotal: number;
	/** Daily goal in ml */
	dailyGoalMl: number;
}

/**
 * Displays daily hydration progress with a visual progress bar
 * Shows remaining amount or excess when goal is exceeded
 */
export function DailyProgress({ todayTotal, dailyGoalMl }: DailyProgressProps) {
	const progressPercent = Math.min((todayTotal / dailyGoalMl) * 100, 100);
	const isGoalMet = todayTotal >= dailyGoalMl;
	const remainingToGoal = Math.max(dailyGoalMl - todayTotal, 0);
	const excessAmount = Math.max(todayTotal - dailyGoalMl, 0);

	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					{isGoalMet ? (
						<CheckCircle2 className="h-5 w-5 text-green-400" />
					) : (
						<Droplet className="h-5 w-5 text-cyan-400" />
					)}
					<span className="text-sm font-medium text-gray-300">
						{isGoalMet ? "Goal achieved!" : "Daily progress"}
					</span>
				</div>
				<span className="text-sm text-gray-400">
					{Math.round(progressPercent)}%
				</span>
			</div>

			<Progress
				value={progressPercent}
				className="h-3 bg-slate-700"
				aria-label={`Hydration progress: ${Math.round(progressPercent)}%`}
			/>

			<div className="flex justify-between items-center text-sm">
				<div className="text-gray-400">
					<span className="text-cyan-400 font-medium">{todayTotal}ml</span>
					<span> / {dailyGoalMl}ml</span>
				</div>
				<div>
					{isGoalMet ? (
						excessAmount > 0 && (
							<span className="text-green-400">+{excessAmount}ml extra</span>
						)
					) : (
						<span className="text-gray-500">{remainingToGoal}ml to go</span>
					)}
				</div>
			</div>
		</div>
	);
}
