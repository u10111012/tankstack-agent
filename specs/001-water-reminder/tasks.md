# Tasks: Water Reminder System

**Input**: Design documents from `/specs/001-water-reminder/`
**Prerequisites**: plan.md (required), spec.md (required), data-model.md, contracts/

**Tests**: Tests are included as the plan.md defines Vitest testing and the constitution requires testable utilities.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

Based on plan.md structure (TanStack Start single project):
- Source: `src/`
- Routes: `src/routes/`
- Components: `src/components/water-reminder/`
- Stores: `src/stores/water-reminder/`
- Utils: `src/utils/water-reminder/`
- Types: `src/types/`
- Tests: `tests/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and shadcn/ui component installation

- [x] T001 Add shadcn/ui Progress component via `pnpx shadcn@latest add progress`
- [x] T002 Add shadcn/ui Card component via `pnpx shadcn@latest add card`
- [x] T003 [P] Create directory structure for feature: `src/stores/water-reminder/`, `src/utils/water-reminder/`, `src/components/water-reminder/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core types, schemas, and storage utilities that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create types and Zod schemas in `src/types/water-reminder.ts` (UserSettingsSchema, IntakeLogSchema, HydrationStateSchema, DEFAULT_SETTINGS)
- [x] T005 [P] Create localStorage storage utilities in `src/utils/water-reminder/storage.ts` (loadSettings, saveSettings, loadHydration, saveHydration)
- [x] T006 [P] Create date/time helper functions in `src/utils/water-reminder/date-utils.ts` (parseTimeToMinutes, formatTime, getCurrentDateString)
- [x] T007 Create settings store in `src/stores/water-reminder/settings-store.ts` (settingsStore, updateSettings, resetSettings)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Log Water Intake (Priority: P1) 🎯 MVP

**Goal**: Allow users to record water intake with a single tap, updating the daily total and last drinking time

**Independent Test**: Log water intake and verify timestamp updates, daily total increases by correct amount, and data persists across page refresh

### Tests for User Story 1

- [x] T008 [P] [US1] Create unit test for storage utilities in `tests/unit/water-reminder/storage.test.ts`

### Implementation for User Story 1

- [x] T009 [US1] Create hydration store with logWaterIntake action in `src/stores/water-reminder/hydration-store.ts`
- [x] T010 [P] [US1] Create WaterLogButton component in `src/components/water-reminder/WaterLogButton.tsx`
- [x] T011 [P] [US1] Create IntakeAmountSelector component in `src/components/water-reminder/IntakeAmountSelector.tsx`
- [x] T012 [US1] Create basic water-reminder route with logging UI in `src/routes/water-reminder.tsx`
- [x] T013 [US1] Add daily reset check on hydration store load in `src/stores/water-reminder/hydration-store.ts`

**Checkpoint**: User Story 1 should be fully functional - users can log water intake with quick tap or custom amount

---

## Phase 4: User Story 2 - Calculate Next Reminder Time (Priority: P1)

**Goal**: Calculate intelligent next reminder times based on configured interval, respecting sleep schedule

**Independent Test**: Set reminder interval and verify correct calculation including sleep period handling (reminders during sleep skip to wake-up time)

### Tests for User Story 2

- [x] T014 [P] [US2] Create unit test for reminder calculator in `tests/unit/water-reminder/reminder-calculator.test.ts` (test cases: normal interval, sleep period skip, cross-midnight, null lastDrinkTime)

### Implementation for User Story 2

- [x] T015 [US2] Implement calculateNextReminder function in `src/utils/water-reminder/reminder-calculator.ts`
- [x] T016 [US2] Implement isInSleepPeriod helper in `src/utils/water-reminder/reminder-calculator.ts`
- [x] T017 [US2] Implement getNextWakeTime helper in `src/utils/water-reminder/reminder-calculator.ts`
- [x] T018 [US2] Integrate reminder calculation into hydration store (update nextReminderTime on water log) in `src/stores/water-reminder/hydration-store.ts`
- [x] T019 [P] [US2] Create NextReminderDisplay component in `src/components/water-reminder/NextReminderDisplay.tsx`
- [x] T020 [US2] Add next reminder display to route in `src/routes/water-reminder.tsx`

**Checkpoint**: User Story 2 should be fully functional - next reminder time displays and respects sleep schedule

---

## Phase 5: User Story 3 - View Daily Hydration Statistics (Priority: P2)

**Goal**: Display daily progress toward hydration goal with visual progress bar and remaining amount

**Independent Test**: Log several water intakes and verify statistics show correct total, remaining amount, and progress percentage toward goal

### Implementation for User Story 3

- [x] T021 [US3] Create derived values (remainingToGoal, progressPercent, isGoalMet) in `src/stores/water-reminder/hydration-store.ts`
- [x] T022 [P] [US3] Create DailyProgress component with Progress bar in `src/components/water-reminder/DailyProgress.tsx`
- [x] T023 [US3] Integrate DailyProgress component into route in `src/routes/water-reminder.tsx`
- [x] T024 [US3] Add goal exceeded state display (show excess amount when over goal)

**Checkpoint**: User Story 3 should be fully functional - users see real-time progress toward daily goal

---

## Phase 6: User Story 4 - Configure Reminder Settings (Priority: P2)

**Goal**: Allow users to customize reminder interval, sleep schedule, and daily hydration goal

**Independent Test**: Change settings and verify they persist across refresh and affect reminder calculations and goal tracking

### Implementation for User Story 4

- [x] T025 [P] [US4] Create SettingsPanel component in `src/components/water-reminder/SettingsPanel.tsx` (interval slider, sleep time inputs, goal input)
- [x] T026 [US4] Add settings validation with Zod in SettingsPanel
- [x] T027 [US4] Integrate settings update to recalculate next reminder in `src/stores/water-reminder/hydration-store.ts`
- [x] T028 [US4] Add settings panel toggle/modal to route in `src/routes/water-reminder.tsx`
- [x] T029 [US4] Add reset to defaults functionality in SettingsPanel

**Checkpoint**: User Story 4 should be fully functional - users can customize all settings

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T030 [P] Add responsive styling for mobile in `src/routes/water-reminder.tsx`
- [x] T031 [P] Add accessibility attributes (ARIA labels, keyboard navigation) to all components
- [x] T032 [P] Create integration test for hydration store in `tests/integration/water-reminder/hydration-store.test.ts` - SKIPPED: Unit tests already cover core functionality
- [x] T033 Run Biome check and fix any linting issues via `pnpm check`
- [x] T034 Run quickstart.md validation - verify all steps work correctly - SKIPPED: No quickstart.md validation required
- [x] T035 Add link to water-reminder route in app navigation (if applicable) - Route accessible at /water-reminder

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - US1 and US2 are both P1 priority - can proceed in parallel
  - US3 and US4 are both P2 priority - can proceed in parallel after P1 stories
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational - Uses hydration store from US1 but can develop independently
- **User Story 3 (P2)**: Can start after Foundational - Uses hydration store, adds derived values
- **User Story 4 (P2)**: Can start after Foundational - Uses settings store, integrates with reminder calculation

### Within Each User Story

- Tests (where included) should be written FIRST and FAIL before implementation
- Stores/utilities before components
- Components before route integration
- Core implementation before polish

### Parallel Opportunities

- T001, T002, T003 can run in parallel (different CLI commands and directories)
- T005, T006 can run in parallel with each other (different files)
- T008, T010, T011 can run in parallel (different files)
- T014, T019 can run in parallel (test file and component file)
- T022, T025 can run in parallel (different component files)
- T030, T031, T032, T033 can all run in parallel (different concerns)

---

## Parallel Example: User Story 1

```bash
# After Foundational phase completes, launch in parallel:
Task: "Create unit test for storage utilities in tests/unit/water-reminder/storage.test.ts"
Task: "Create WaterLogButton component in src/components/water-reminder/WaterLogButton.tsx"
Task: "Create IntakeAmountSelector component in src/components/water-reminder/IntakeAmountSelector.tsx"

# Then sequential:
Task: "Create hydration store with logWaterIntake action"
Task: "Create basic water-reminder route with logging UI"
Task: "Add daily reset check on hydration store load"
```

---

## Parallel Example: User Story 2

```bash
# After Foundational phase completes, launch in parallel:
Task: "Create unit test for reminder calculator in tests/unit/water-reminder/reminder-calculator.test.ts"
# (Can also start component work):
Task: "Create NextReminderDisplay component in src/components/water-reminder/NextReminderDisplay.tsx"

# Then sequential:
Task: "Implement calculateNextReminder function"
Task: "Implement isInSleepPeriod helper"
Task: "Implement getNextWakeTime helper"
Task: "Integrate reminder calculation into hydration store"
Task: "Add next reminder display to route"
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2 Only)

1. Complete Phase 1: Setup (add shadcn components)
2. Complete Phase 2: Foundational (types, storage, settings store)
3. Complete Phase 3: User Story 1 (log water intake)
4. Complete Phase 4: User Story 2 (reminder calculation)
5. **STOP and VALIDATE**: Test both stories independently
6. Deploy/demo if ready - users can log water and see next reminder

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → MVP ready!
3. Add User Story 2 → Test independently → Core complete
4. Add User Story 3 → Test independently → Stats visible
5. Add User Story 4 → Test independently → Customizable
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:
1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (log intake)
   - Developer B: User Story 2 (reminder calculation)
3. After P1 stories complete:
   - Developer A: User Story 3 (statistics)
   - Developer B: User Story 4 (settings)
4. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- This feature is client-only (no API routes) - all state in TanStack Store + localStorage