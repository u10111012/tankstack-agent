import { createFileRoute } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { Droplet, Settings, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DailyProgress } from "@/components/water-reminder/DailyProgress";
import { IntakeAmountSelector } from "@/components/water-reminder/IntakeAmountSelector";
import { NextReminderDisplay } from "@/components/water-reminder/NextReminderDisplay";
import { SettingsPanel } from "@/components/water-reminder/SettingsPanel";
import { WaterLogButton } from "@/components/water-reminder/WaterLogButton";
import {
	hydrationStore,
	logWaterIntake,
} from "@/stores/water-reminder/hydration-store";
import { settingsStore } from "@/stores/water-reminder/settings-store";
import { formatDateTime } from "@/utils/water-reminder/date-utils";

export const Route = createFileRoute("/water-reminder")({
	component: WaterReminderPage,
});

function WaterReminderPage() {
	const hydration = useStore(hydrationStore);
	const settings = useStore(settingsStore);
	const [showSettings, setShowSettings] = useState(false);

	const handleLogWater = (amountMl: number) => {
		logWaterIntake(amountMl, settings);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6">
			<div className="max-w-md mx-auto space-y-6">
				<div className="text-center relative">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setShowSettings(!showSettings)}
						className="absolute right-0 top-0 text-gray-400 hover:text-white"
						aria-label={showSettings ? "Close settings" : "Open settings"}
					>
						{showSettings ? (
							<X className="h-5 w-5" />
						) : (
							<Settings className="h-5 w-5" />
						)}
					</Button>
					<div className="flex items-center justify-center gap-3 mb-2">
						<Droplet className="h-8 w-8 text-cyan-400" />
						<h1 className="text-3xl font-bold text-white">Water Reminder</h1>
					</div>
					<p className="text-gray-400">Stay hydrated throughout the day</p>
				</div>

				{showSettings && (
					<Card className="bg-slate-800/50 border-slate-700">
						<CardHeader className="pb-2">
							<CardTitle className="text-white text-lg">Settings</CardTitle>
						</CardHeader>
						<CardContent>
							<SettingsPanel
								currentSettings={settings}
								onSave={() => setShowSettings(false)}
							/>
						</CardContent>
					</Card>
				)}

				<Card className="bg-slate-800/50 border-slate-700">
					<CardHeader className="pb-2">
						<CardTitle className="text-white text-lg">
							Today's Progress
						</CardTitle>
					</CardHeader>
					<CardContent>
						<DailyProgress
							todayTotal={hydration.todayTotal}
							dailyGoalMl={settings.dailyGoalMl}
						/>
						{hydration.lastDrinkTime && (
							<div className="text-center text-sm text-gray-500 border-t border-slate-700 pt-3 mt-4">
								Last drink: {formatDateTime(new Date(hydration.lastDrinkTime))}
							</div>
						)}
					</CardContent>
				</Card>

				<Card className="bg-slate-800/50 border-slate-700">
					<CardHeader className="pb-2">
						<CardTitle className="text-white text-lg">Next Reminder</CardTitle>
					</CardHeader>
					<CardContent>
						<NextReminderDisplay
							nextReminderTime={hydration.nextReminderTime}
						/>
					</CardContent>
				</Card>

				<Card className="bg-slate-800/50 border-slate-700">
					<CardHeader className="pb-2">
						<CardTitle className="text-white text-lg">Quick Log</CardTitle>
					</CardHeader>
					<CardContent>
						<WaterLogButton
							onLog={handleLogWater}
							defaultAmount={settings.defaultAmountMl}
						/>
					</CardContent>
				</Card>

				<Card className="bg-slate-800/50 border-slate-700">
					<CardHeader className="pb-2">
						<CardTitle className="text-white text-lg">Custom Amount</CardTitle>
					</CardHeader>
					<CardContent>
						<IntakeAmountSelector
							onSelect={handleLogWater}
							defaultAmount={settings.defaultAmountMl}
						/>
					</CardContent>
				</Card>

				{hydration.intakeLogs.length > 0 && (
					<Card className="bg-slate-800/50 border-slate-700">
						<CardHeader className="pb-2">
							<CardTitle className="text-white text-lg">
								Today's Intake Log
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{[...hydration.intakeLogs].reverse().map((log) => (
									<li
										key={log.id}
										className="flex justify-between items-center text-sm py-2 border-b border-slate-700 last:border-0"
									>
										<span className="text-gray-400">
											{formatDateTime(new Date(log.timestamp))}
										</span>
										<span className="text-cyan-400 font-medium">
											{log.amountMl}ml
										</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}
