import decodePolyLine from "./index"

describe("decodePolyLine", () => {
	it("decodes a polyline and flips the latitude and longitude", () => {
		const polyline = "_p~iF~ps|U_ulLnnqC_mqNvxq`@"
		const expected = [
			[-120.2, 38.5],
			[-120.95, 40.7],
			[-126.453, 43.252],
		]

		const result = decodePolyLine(polyline)

		expect(result).toEqual(expected)
	})
})
