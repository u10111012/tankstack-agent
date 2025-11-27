import { Store } from "@tanstack/store";
import type { UserSettings } from "@/types/water-reminder";
import { DEFAULT_SETTINGS, UserSettingsSchema } from "@/types/water-reminder";
import { loadSettings, saveSettings } from "@/utils/water-reminder/storage";

/**
 * TanStack Store for user settings
 * Initialized from localStorage on load
 */
export const settingsStore = new Store<UserSettings>(loadSettings());

/**
 * Update user settings with partial values
 * Validates and persists to localStorage
 */
export function updateSettings(updates: Partial<UserSettings>): void {
	settingsStore.setState((state) => {
		// Merge updates with current state
		const merged = { ...state, ...updates };

		// Validate the merged state
		const validated = UserSettingsSchema.parse(merged);

		// Persist to localStorage
		saveSettings(validated);

		return validated;
	});
}

/**
 * Reset settings to default values
 */
export function resetSettings(): void {
	settingsStore.setState(() => {
		saveSettings(DEFAULT_SETTINGS);
		return DEFAULT_SETTINGS;
	});
}

/**
 * Get current settings (snapshot, not reactive)
 */
export function getSettings(): UserSettings {
	return settingsStore.state;
}
