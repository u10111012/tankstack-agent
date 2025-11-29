import { RotateCcw, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { updateNextReminderTime } from "@/stores/water-reminder/hydration-store";
import {
	resetSettings,
	updateSettings,
} from "@/stores/water-reminder/settings-store";
import type { UserSettings } from "@/types/water-reminder";
import { DEFAULT_SETTINGS, UserSettingsSchema } from "@/types/water-reminder";
import { formatDuration } from "@/utils/water-reminder/date-utils";

export interface SettingsPanelProps {
	/** Current settings to display */
	currentSettings: UserSettings;
	/** Callback when settings are saved */
	onSave?: () => void;
}

/**
 * Panel for configuring water reminder settings
 * Includes interval slider, sleep time inputs, and goal input
 */
export function SettingsPanel({ currentSettings, onSave }: SettingsPanelProps) {
	const [formValues, setFormValues] = useState<UserSettings>(currentSettings);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleIntervalChange = (value: number[]) => {
		setFormValues((prev) => ({ ...prev, reminderIntervalMinutes: value[0] }));
	};

	const handleInputChange = (field: keyof UserSettings, value: string) => {
		setFormValues((prev) => ({
			...prev,
			[field]:
				field === "dailyGoalMl" || field === "defaultAmountMl"
					? parseInt(value, 10) || 0
					: value,
		}));
	};

	const validateAndSave = () => {
		try {
			const validated = UserSettingsSchema.parse(formValues);
			updateSettings(validated);
			updateNextReminderTime(validated);
			setErrors({});
			onSave?.();
		} catch (error) {
			if (error instanceof Error && "errors" in error) {
				const zodErrors: Record<string, string> = {};
				const zodError = error as {
					errors: Array<{ path: string[]; message: string }>;
				};
				zodError.errors.forEach((err) => {
					const field = err.path.join(".");
					zodErrors[field] = err.message;
				});
				setErrors(zodErrors);
			}
		}
	};

	const handleReset = () => {
		resetSettings();
		setFormValues(DEFAULT_SETTINGS);
		updateNextReminderTime(DEFAULT_SETTINGS);
		setErrors({});
	};

	return (
		<div className="space-y-6">
			<div className="space-y-3">
				<div className="flex justify-between items-center">
					<Label className="text-gray-300">Reminder Interval</Label>
					<span className="text-sm text-cyan-400 font-medium">
						{formatDuration(formValues.reminderIntervalMinutes)}
					</span>
				</div>
				<Slider
					value={[formValues.reminderIntervalMinutes]}
					onValueChange={handleIntervalChange}
					min={15}
					max={480}
					step={15}
					className="py-2"
					aria-label="Reminder interval"
				/>
				<p className="text-xs text-gray-500">
					How often to remind you to drink water (15 min - 8 hours)
				</p>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="sleepStart" className="text-gray-300">
						Sleep Start
					</Label>
					<Input
						id="sleepStart"
						type="time"
						value={formValues.sleepStart}
						onChange={(e) => handleInputChange("sleepStart", e.target.value)}
						className="bg-slate-700 border-slate-600 text-white"
						aria-describedby="sleepStart-error"
					/>
					{errors.sleepStart && (
						<p id="sleepStart-error" className="text-xs text-red-400">
							{errors.sleepStart}
						</p>
					)}
				</div>
				<div className="space-y-2">
					<Label htmlFor="sleepEnd" className="text-gray-300">
						Wake Up
					</Label>
					<Input
						id="sleepEnd"
						type="time"
						value={formValues.sleepEnd}
						onChange={(e) => handleInputChange("sleepEnd", e.target.value)}
						className="bg-slate-700 border-slate-600 text-white"
						aria-describedby="sleepEnd-error"
					/>
					{errors.sleepEnd && (
						<p id="sleepEnd-error" className="text-xs text-red-400">
							{errors.sleepEnd}
						</p>
					)}
				</div>
			</div>
			<p className="text-xs text-gray-500">
				No reminders will be sent during sleep hours
			</p>

			<div className="space-y-2">
				<Label htmlFor="dailyGoalMl" className="text-gray-300">
					Daily Goal (ml)
				</Label>
				<Input
					id="dailyGoalMl"
					type="number"
					min={500}
					max={5000}
					step={100}
					value={formValues.dailyGoalMl}
					onChange={(e) => handleInputChange("dailyGoalMl", e.target.value)}
					className="bg-slate-700 border-slate-600 text-white"
					aria-describedby="dailyGoalMl-hint dailyGoalMl-error"
				/>
				<span id="dailyGoalMl-hint" className="text-xs text-gray-500">
					Recommended: 2000-3000ml per day
				</span>
				{errors.dailyGoalMl && (
					<p id="dailyGoalMl-error" className="text-xs text-red-400">
						{errors.dailyGoalMl}
					</p>
				)}
			</div>

			<div className="space-y-2">
				<Label htmlFor="defaultAmountMl" className="text-gray-300">
					Quick Log Amount (ml)
				</Label>
				<Input
					id="defaultAmountMl"
					type="number"
					min={50}
					max={1000}
					step={50}
					value={formValues.defaultAmountMl}
					onChange={(e) => handleInputChange("defaultAmountMl", e.target.value)}
					className="bg-slate-700 border-slate-600 text-white"
					aria-describedby="defaultAmountMl-hint defaultAmountMl-error"
				/>
				<span id="defaultAmountMl-hint" className="text-xs text-gray-500">
					Default amount for quick log button
				</span>
				{errors.defaultAmountMl && (
					<p id="defaultAmountMl-error" className="text-xs text-red-400">
						{errors.defaultAmountMl}
					</p>
				)}
			</div>

			<div className="flex gap-3 pt-4">
				<Button
					onClick={validateAndSave}
					className="flex-1 bg-cyan-600 hover:bg-cyan-700"
				>
					<Save className="h-4 w-4 mr-2" />
					Save Settings
				</Button>
				<Button
					onClick={handleReset}
					variant="outline"
					className="border-slate-600 hover:bg-slate-700"
				>
					<RotateCcw className="h-4 w-4 mr-2" />
					Reset
				</Button>
			</div>
		</div>
	);
}
