import { getMapboxEndpoint } from "./index"

describe("getMapboxEndpoint", () => {
	it("should return a valid Mapbox endpoint", () => {
		const coordinates = "0,0,1,1"
		const result = getMapboxEndpoint(coordinates)
		expect(result).toContain(coordinates)
		expect(result).toContain("https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson")
	})
})
