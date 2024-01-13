import { API_BASE_URL } from "../../../constants"
import { getEndpoint } from "./index"

describe("getEndpoint", () => {
	it("should return the correct endpoint without date parameters", () => {
		const result = getEndpoint()
		expect(result).toBe(`${API_BASE_URL}/athlete/activities?per_page=200`)
	})

	it("should return the correct endpoint with dateBefore parameter", () => {
		const result = getEndpoint(1627776000)
		expect(result).toBe(`${API_BASE_URL}/athlete/activities?per_page=200&before=1627776000`)
	})

	it("should return the correct endpoint with dateAfter parameter", () => {
		const result = getEndpoint(undefined, 1627776000)
		expect(result).toBe(`${API_BASE_URL}/athlete/activities?per_page=200&after=1627776000`)
	})

	it("should return the correct endpoint with both date parameters", () => {
		const result = getEndpoint(1627776000, 1627862400)
		expect(result).toBe(`${API_BASE_URL}/athlete/activities?per_page=200&before=1627776000&after=1627862400`)
	})
})
