import { getAthleteDataIfNeeded } from "./index"
import { INITIAL_DATA_MESSAGE } from "../../../../constants"

describe("getAthleteDataIfNeeded", () => {
	it("calls loadAthleteData when text is equal to INITIAL_DATA_MESSAGE", () => {
		const loadAthleteData = jest.fn()
		const athleteID = 123

		getAthleteDataIfNeeded(INITIAL_DATA_MESSAGE, loadAthleteData, athleteID)

		expect(loadAthleteData).toHaveBeenCalledWith(athleteID)
	})

	it("does not call loadAthleteData when text is not equal to INITIAL_DATA_MESSAGE", () => {
		const loadAthleteData = jest.fn()
		const athleteID = 123

		getAthleteDataIfNeeded("Some other message", loadAthleteData, athleteID)

		expect(loadAthleteData).not.toHaveBeenCalled()
	})
})
