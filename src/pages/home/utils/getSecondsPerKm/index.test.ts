import { getSecondsPerKm } from "./index" // adjust the import path as needed

describe("calculatePace", () => {
	it("should correctly calculate pace for each segment", () => {
		const distanceStream = [0, 60, 180, 240, 300, 315]
		const expectedPaceList = [250, 125, 250, 250, 1000]

		const paceList = getSecondsPerKm(distanceStream)

		expect(paceList).toEqual(expectedPaceList)
	})
})
