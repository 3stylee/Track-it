import { convertToKm } from "./index"

describe("convertToKm", () => {
	it("converts a distance in meters to kilometers", () => {
		const distanceMeters = "1500"
		const expected = "1.50 km"

		const result = convertToKm(distanceMeters)

		expect(result).toBe(expected)
	})
})
