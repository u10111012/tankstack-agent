import { describe, it, expect, beforeEach, vi } from "vitest"
import {
	loadSettings,
	saveSettings,
	loadHydration,
	saveHydration,
	clearAllData,
} from "@/utils/water-reminder/storage"
import { DEFAULT_SETTINGS, STORAGE_KEYS } from "@/types/water-reminder"
import type { UserSettings, HydrationState } from "@/types/water-reminder"

// Mock localStorage
const localStorageMock = (() => {
	let store: Record<string, string> = {}
	return {
		getItem: vi.fn((key: string) => store[key] || null),
		setItem: vi.fn((key: string, value: string) => {
			store[key] = value
		}),
		removeItem: vi.fn((key: string) => {
			delete store[key]
		}),
		clear: vi.fn(() => {
			store = {}
		}),
	}
})()

Object.defineProperty(global, "localStorage", { value: localStorageMock })

describe("storage utilities", () => {
	beforeEach(() => {
		localStorageMock.clear()
		vi.clearAllMocks()
	})

	describe("loadSettings", () => {
		it("should return default settings when localStorage is empty", () => {
			const settings = loadSettings()
			expect(settings).toEqual(DEFAULT_SETTINGS)
		})

		it("should load valid settings from localStorage", () => {
			const customSettings: UserSettings = {
				reminderIntervalMinutes: 90,
				sleepStart: "22:00",
				sleepEnd: "06:00",
				dailyGoalMl: 2500,
				defaultAmountMl: 300,
			}
			localStorageMock.setItem(
				STORAGE_KEYS.SETTINGS,
				JSON.stringify(customSettings)
			)

			const settings = loadSettings()
			expect(settings).toEqual(customSettings)
		})

		it("should return default settings when localStorage has invalid JSON", () => {
			localStorageMock.setItem(STORAGE_KEYS.SETTINGS, "invalid json")

			const settings = loadSettings()
			expect(settings).toEqual(DEFAULT_SETTINGS)
		})

		it("should return default settings when localStorage has invalid schema", () => {
			localStorageMock.setItem(
				STORAGE_KEYS.SETTINGS,
				JSON.stringify({ reminderIntervalMinutes: 5 }) // Below minimum
			)

			const settings = loadSettings()
			expect(settings).toEqual(DEFAULT_SETTINGS)
		})
	})

	describe("saveSettings", () => {
		it("should save settings to localStorage", () => {
			const customSettings: UserSettings = {
				reminderIntervalMinutes: 90,
				sleepStart: "22:00",
				sleepEnd: "06:00",
				dailyGoalMl: 2500,
				defaultAmountMl: 300,
			}

			saveSettings(customSettings)

			expect(localStorageMock.setItem).toHaveBeenCalledWith(
				STORAGE_KEYS.SETTINGS,
				JSON.stringify(customSettings)
			)
		})
	})

	describe("loadHydration", () => {
		it("should return initial hydration state when localStorage is empty", () => {
			const state = loadHydration()

			expect(state.todayTotal).toBe(0)
			expect(state.lastDrinkTime).toBeNull()
			expect(state.intakeLogs).toEqual([])
			expect(state.nextReminderTime).toBeNull()
		})

		it("should load valid hydration state from localStorage", () => {
			const customState: HydrationState = {
				lastDrinkTime: "2025-11-27T14:30:00.000Z",
				todayTotal: 750,
				todayDate: "2025-11-27",
				intakeLogs: [
					{
						id: "123e4567-e89b-12d3-a456-426614174000",
						timestamp: "2025-11-27T14:30:00.000Z",
						amountMl: 250,
					},
				],
				nextReminderTime: "2025-11-27T16:30:00.000Z",
			}
			localStorageMock.setItem(
				STORAGE_KEYS.HYDRATION,
				JSON.stringify(customState)
			)

			const state = loadHydration()
			expect(state).toEqual(customState)
		})

		it("should return initial state when localStorage has invalid data", () => {
			localStorageMock.setItem(STORAGE_KEYS.HYDRATION, "invalid json")

			const state = loadHydration()

			expect(state.todayTotal).toBe(0)
			expect(state.lastDrinkTime).toBeNull()
		})
	})

	describe("saveHydration", () => {
		it("should save hydration state to localStorage", () => {
			const state: HydrationState = {
				lastDrinkTime: "2025-11-27T14:30:00.000Z",
				todayTotal: 500,
				todayDate: "2025-11-27",
				intakeLogs: [],
				nextReminderTime: null,
			}

			saveHydration(state)

			expect(localStorageMock.setItem).toHaveBeenCalledWith(
				STORAGE_KEYS.HYDRATION,
				JSON.stringify(state)
			)
		})
	})

	describe("clearAllData", () => {
		it("should remove both settings and hydration from localStorage", () => {
			localStorageMock.setItem(STORAGE_KEYS.SETTINGS, "{}")
			localStorageMock.setItem(STORAGE_KEYS.HYDRATION, "{}")

			clearAllData()

			expect(localStorageMock.removeItem).toHaveBeenCalledWith(
				STORAGE_KEYS.SETTINGS
			)
			expect(localStorageMock.removeItem).toHaveBeenCalledWith(
				STORAGE_KEYS.HYDRATION
			)
		})
	})
})
