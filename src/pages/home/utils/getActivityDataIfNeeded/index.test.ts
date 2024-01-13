import { getActivityDataIfNeeded } from "./index"
import { INITIAL_DATA_MESSAGE } from "../../../../constants"

describe("getActivityDataIfNeeded", () => {
	it("calls loadAthleteActivities when text is equal to INITIAL_DATA_MESSAGE", () => {
		const loadAthleteActivities = jest.fn()

		getActivityDataIfNeeded(INITIAL_DATA_MESSAGE, loadAthleteActivities)

		expect(loadAthleteActivities).toHaveBeenCalled()
	})

	it("does not call loadAthleteActivities when text is not equal to INITIAL_DATA_MESSAGE", () => {
		const loadAthleteActivities = jest.fn()

		getActivityDataIfNeeded("Some other message", loadAthleteActivities)

		expect(loadAthleteActivities).not.toHaveBeenCalled()
	})
})
