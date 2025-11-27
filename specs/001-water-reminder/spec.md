ㄥ# Feature Specification: Water Reminder System (喝水提醒系統)

**Feature Branch**: `001-water-reminder`
**Created**: 2025-11-27
**Status**: Draft
**Input**: User description: "喝水提醒系統：記錄使用者最近一次喝水時間、計算下一次喝水提醒時間、每日飲水量統計"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Log Water Intake (Priority: P1)

**Acceptance Scenarios**:

1. **Given** I am on the main screen, 
2. **When** I tap the "Log Water" button, 
3. **Then** my last drinking time is updated to now and my daily total increases by the default amount (250ml)
---

### User Story 2 - Calculate Next Reminder Time (Priority: P1)

**Acceptance Scenarios**:

1. **Given** my reminder interval is 2 hours and I last drank at 14:00, **When** the system calculates the next reminder, **Then** the next reminder is set for 16:00
2. **Given** my reminder interval is 2 hours and I last drank at 22:00, **When** my sleep period is 23:00-07:00, **Then** the next reminder is set for 07:00 the next day
3. **Given** my reminder interval is 2 hours and I last drank at 21:30, **When** my sleep period is 23:00-07:00, **Then** the next reminder is set for 23:30 (before sleep starts), but if that time passes without drinking, the next reminder moves to 07:00

### Edge Cases

- What happens when the user logs water during their configured sleep period?
  - The system should still record the intake and recalculate the next reminder from that time

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST allow users to log a water intake event with a single tap using a default amount (250ml)
- **FR-002**: System MUST allow users to specify a custom water intake amount when logging

### Key Entities

- **Water Intake Log**: Represents a single water drinking event with timestamp and volume (ml)
- **User Settings**: Contains user preferences including reminder interval, sleep period (start/end times), and daily goal
- **Daily Statistics**: Aggregated data for a specific date including total volume consumed and goal progress

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can log a water intake in under 3 seconds with a single tap
- **SC-002**: Users can view their current daily progress within 1 second of opening the app
- **SC-003**: Reminder times are calculated correctly 100% of the time, including proper sleep period handling
- **SC-004**: 80% of users who set up the app continue using it for daily hydration tracking after 7 days
- **SC-005**: Daily statistics accurately reflect all logged intakes with zero data loss
- **SC-006**: Users report improved awareness of their hydration habits within the first week of use

## Assumptions

- Users have a mobile device or web browser to access the application
- Users want to be reminded during waking hours only (not during sleep)
- A "day" is defined as midnight to midnight in the user's local timezone
- The default water intake amount of 250ml represents a standard glass of water
- The default daily goal of 2000ml is a commonly recommended amount for adults
- Users will interact with the app primarily through quick logging actions rather than detailed data entry
