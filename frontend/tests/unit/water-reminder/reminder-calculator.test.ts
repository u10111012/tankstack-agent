import { describe, it, expect, beforeEach, vi, afterEach } from "vitest"
import {
	calculateNextReminder,
	isInSleepPeriod,
	getNextWakeTime,
} from "@/utils/water-reminder/reminder-calculator"
import type { UserSettings } from "@/types/water-reminder"

const DEFAULT_SETTINGS: UserSettings = {
	reminderIntervalMinutes: 120, // 2 hours
	sleepStart: "23:00",
	sleepEnd: "07:00",
	dailyGoalMl: 2000,
	defaultAmountMl: 250,
}

describe("reminder-calculator utilities", () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	describe("isInSleepPeriod", () => {
		it("should return true when current time is during sleep hours (night)", () => {
			// Set time to 1:00 AM
			vi.setSystemTime(new Date("2025-11-27T01:00:00"))

			const result = isInSleepPeriod("23:00", "07:00")
			expect(result).toBe(true)
		})

		it("should return true when current time is exactly at sleep start", () => {
			vi.setSystemTime(new Date("2025-11-27T23:00:00"))

			const result = isInSleepPeriod("23:00", "07:00")
			expect(result).toBe(true)
		})

		it("should return false when current time is exactly at sleep end (wake time)", () => {
			vi.setSystemTime(new Date("2025-11-27T07:00:00"))

			const result = isInSleepPeriod("23:00", "07:00")
			expect(result).toBe(false)
		})

		it("should return false when current time is during awake hours", () => {
			// Set time to 2:00 PM
			vi.setSystemTime(new Date("2025-11-27T14:00:00"))

			const result = isInSleepPeriod("23:00", "07:00")
			expect(result).toBe(false)
		})

		it("should handle sleep period that does not cross midnight", () => {
			// Sleep from 13:00 to 15:00 (afternoon nap)
			vi.setSystemTime(new Date("2025-11-27T14:00:00"))

			const result = isInSleepPeriod("13:00", "15:00")
			expect(result).toBe(true)
		})

		it("should return false outside non-crossing sleep period", () => {
			vi.setSystemTime(new Date("2025-11-27T16:00:00"))

			const result = isInSleepPeriod("13:00", "15:00")
			expect(result).toBe(false)
		})
	})

	describe("getNextWakeTime", () => {
		it("should return wake time today if sleep end is later today", () => {
			// 1:00 AM, wake time is 7:00 AM same day
			vi.setSystemTime(new Date("2025-11-27T01:00:00"))

			const result = getNextWakeTime("07:00")
			expect(result.getHours()).toBe(7)
			expect(result.getMinutes()).toBe(0)
			expect(result.getDate()).toBe(27) // Same day
		})

		it("should return wake time tomorrow if sleep end has passed", () => {
			// 10:00 PM, wake time (7:00 AM) is next day
			vi.setSystemTime(new Date("2025-11-27T22:00:00"))

			const result = getNextWakeTime("07:00")
			expect(result.getHours()).toBe(7)
			expect(result.getMinutes()).toBe(0)
			expect(result.getDate()).toBe(28) // Next day
		})

		it("should return tomorrow if currently at exact wake time", () => {
			// Exactly 7:00 AM
			vi.setSystemTime(new Date("2025-11-27T07:00:00"))

			const result = getNextWakeTime("07:00")
			expect(result.getDate()).toBe(28) // Next day
		})
	})

	describe("calculateNextReminder", () => {
		it("should calculate next reminder based on interval when no last drink time", () => {
			// Set current time to 10:00 AM
			vi.setSystemTime(new Date("2025-11-27T10:00:00"))

			const result = calculateNextReminder(null, DEFAULT_SETTINGS)

			// Should return current time + interval (2 hours)
			const expected = new Date("2025-11-27T12:00:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})

		it("should calculate next reminder from last drink time", () => {
			vi.setSystemTime(new Date("2025-11-27T14:00:00"))
			const lastDrinkTime = new Date("2025-11-27T13:30:00").toISOString()

			const result = calculateNextReminder(lastDrinkTime, DEFAULT_SETTINGS)

			// Should return last drink + interval (13:30 + 2h = 15:30)
			const expected = new Date("2025-11-27T15:30:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})

		it("should skip to wake time when reminder falls in sleep period", () => {
			// Last drink at 10:00 PM, with 2-hour interval would be midnight (during sleep)
			vi.setSystemTime(new Date("2025-11-27T22:00:00"))
			const lastDrinkTime = new Date("2025-11-27T22:00:00").toISOString()

			const result = calculateNextReminder(lastDrinkTime, DEFAULT_SETTINGS)

			// 22:00 + 2h = 00:00 (during sleep 23:00-07:00), should skip to 07:00
			const expected = new Date("2025-11-28T07:00:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})

		it("should skip to wake time when current time is in sleep period and no last drink", () => {
			// 1:00 AM (during sleep)
			vi.setSystemTime(new Date("2025-11-27T01:00:00"))

			const result = calculateNextReminder(null, DEFAULT_SETTINGS)

			// Should skip to wake time (7:00 AM)
			const expected = new Date("2025-11-27T07:00:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})

		it("should handle cross-midnight calculation", () => {
			// 11:30 PM, interval of 2 hours would be 1:30 AM
			vi.setSystemTime(new Date("2025-11-27T23:30:00"))
			const lastDrinkTime = new Date("2025-11-27T23:30:00").toISOString()

			const result = calculateNextReminder(lastDrinkTime, DEFAULT_SETTINGS)

			// 23:30 + 2h = 01:30 (during sleep), should skip to 07:00 next day
			const expected = new Date("2025-11-28T07:00:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})

		it("should return time in past if last drink is old and not in sleep", () => {
			// Current time: 2:00 PM
			vi.setSystemTime(new Date("2025-11-27T14:00:00"))
			// Last drink was at 9:00 AM (5 hours ago)
			const lastDrinkTime = new Date("2025-11-27T09:00:00").toISOString()

			const result = calculateNextReminder(lastDrinkTime, DEFAULT_SETTINGS)

			// 09:00 + 2h = 11:00 (in the past, but not in sleep)
			const expected = new Date("2025-11-27T11:00:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})

		it("should use custom interval from settings", () => {
			vi.setSystemTime(new Date("2025-11-27T10:00:00"))
			const lastDrinkTime = new Date("2025-11-27T10:00:00").toISOString()
			const customSettings = { ...DEFAULT_SETTINGS, reminderIntervalMinutes: 30 }

			const result = calculateNextReminder(lastDrinkTime, customSettings)

			// 10:00 + 30min = 10:30
			const expected = new Date("2025-11-27T10:30:00")
			expect(new Date(result!).getTime()).toBe(expected.getTime())
		})
	})
})