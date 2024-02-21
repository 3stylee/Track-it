import { getActivityDataIfNeeded } from "./index"

describe("getActivityDataIfNeeded", () => {
	it("calls loadAthleteActivities when data is empty", () => {
		const loadAthleteActivities = jest.fn()

		getActivityDataIfNeeded([], loadAthleteActivities)

		expect(loadAthleteActivities).toHaveBeenCalled()
	})

	it("does not call loadAthleteActivities when data is not empty", () => {
		const loadAthleteActivities = jest.fn()

		getActivityDataIfNeeded([{}], loadAthleteActivities)

		expect(loadAthleteActivities).not.toHaveBeenCalled()
	})
})
