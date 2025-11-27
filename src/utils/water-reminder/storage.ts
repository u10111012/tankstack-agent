import type { HydrationState, UserSettings } from "@/types/water-reminder";
import {
	DEFAULT_SETTINGS,
	getInitialHydrationState,
	HydrationStateSchema,
	STORAGE_KEYS,
	UserSettingsSchema,
} from "@/types/water-reminder";

/**
 * Load user settings from localStorage with Zod validation
 * Returns default settings if no data exists or validation fails
 */
export function loadSettings(): UserSettings {
	if (typeof window === "undefined") {
		return DEFAULT_SETTINGS;
	}

	try {
		const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
		if (!raw) {
			return DEFAULT_SETTINGS;
		}
		return UserSettingsSchema.parse(JSON.parse(raw));
	} catch {
		// Return defaults on parse failure (corrupted data)
		return DEFAULT_SETTINGS;
	}
}

/**
 * Save user settings to localStorage
 */
export function saveSettings(settings: UserSettings): void {
	if (typeof window === "undefined") {
		return;
	}

	localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

/**
 * Load hydration state from localStorage with Zod validation
 * Returns initial state if no data exists or validation fails
 */
export function loadHydration(): HydrationState {
	if (typeof window === "undefined") {
		return getInitialHydrationState();
	}

	try {
		const raw = localStorage.getItem(STORAGE_KEYS.HYDRATION);
		if (!raw) {
			return getInitialHydrationState();
		}
		return HydrationStateSchema.parse(JSON.parse(raw));
	} catch {
		// Return initial state on parse failure (corrupted data)
		return getInitialHydrationState();
	}
}

/**
 * Save hydration state to localStorage
 */
export function saveHydration(state: HydrationState): void {
	if (typeof window === "undefined") {
		return;
	}

	localStorage.setItem(STORAGE_KEYS.HYDRATION, JSON.stringify(state));
}

/**
 * Clear all water reminder data from localStorage
 */
export function clearAllData(): void {
	if (typeof window === "undefined") {
		return;
	}

	localStorage.removeItem(STORAGE_KEYS.SETTINGS);
	localStorage.removeItem(STORAGE_KEYS.HYDRATION);
}
