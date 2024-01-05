import { getActivityDataIfNeeded } from "./index"
import { INITIAL_DATA_MESSAGE } from "../../../../constants"

describe("getActivityDataIfNeeded", () => {
	it("calls loadActivityData when text is equal to INITIAL_DATA_MESSAGE", () => {
		const loadActivityData = jest.fn()

		getActivityDataIfNeeded(INITIAL_DATA_MESSAGE, loadActivityData)

		expect(loadActivityData).toHaveBeenCalled()
	})

	it("does not call loadActivityData when text is not equal to INITIAL_DATA_MESSAGE", () => {
		const loadActivityData = jest.fn()

		getActivityDataIfNeeded("Some other message", loadActivityData)

		expect(loadActivityData).not.toHaveBeenCalled()
	})
})
