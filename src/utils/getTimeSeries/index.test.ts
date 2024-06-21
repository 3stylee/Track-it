import { STREAM_RESOLUTION_FACTOR } from "../../constants/constants"
import { getTimeSeries } from "./index"

describe("getTimeSeries", () => {
	it("should return an the correct array of time strings when less than an hour", () => {
		const length = 5
		const result = getTimeSeries(length)
		expect(result).toHaveLength(length)
		expect(result[0]).toBe("00:00")
		expect(result[1]).toBe(`00:${STREAM_RESOLUTION_FACTOR}`)
		expect(result[4]).toMatch(/\d{2}:\d{2}/)
	})
	it("should return an the correct array of time strings when more than an hour", () => {
		const length = 241
		const result = getTimeSeries(length)
		expect(result).toHaveLength(length)
		expect(result[0]).toBe("00:00")
		expect(result[1]).toBe(`00:${STREAM_RESOLUTION_FACTOR}`)
		expect(result[240]).toMatch(/\d{1}:\d{2}:\d{2}/)
	})
})
