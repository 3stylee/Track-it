import { getActivityGraphData } from "./index"

describe("getActivityGraphData", () => {
	it("should return an object with the correct properties", () => {
		const mockActivityStream = {
			distance: {
				original_size: "200",
				data: [1, 2, 3, 4, 5],
			},
			heartrate: {
				data: [60, 70, 80, 90, 100],
			},
			altitude: {
				data: [100, 200, 300, 400, 500],
			},
		}
		const theme = "light"

		const result = getActivityGraphData(mockActivityStream, theme)

		expect(result).toHaveProperty("time")
		expect(result).toHaveProperty("paceStreamData")
		expect(result).toHaveProperty("paceOptions")
		expect(result).toHaveProperty("heartRateStreamData")
		expect(result).toHaveProperty("heartRateOptions")
		expect(result).toHaveProperty("altitudeStreamData")
		expect(result).toHaveProperty("altitudeOptions")
	})
})
