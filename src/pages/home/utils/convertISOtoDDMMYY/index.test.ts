import { convertISOToDDMMYY } from "./index"

describe("convertISOToDDMMYY", () => {
	it("converts an ISO date string to a DD/MM/YY string", () => {
		const isoString = "2022-01-05T12:00:00Z"
		const expected = "5/1/22"

		const result = convertISOToDDMMYY(isoString)

		expect(result).toBe(expected)
	})
})
