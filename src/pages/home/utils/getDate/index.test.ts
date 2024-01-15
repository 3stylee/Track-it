import { getDate } from "./index"
import { WEEK_OR_MONTH } from "../../../../constants"

describe("getDate", () => {
	let dateSpy: jest.SpyInstance

	beforeEach(() => {
		// Mock the current date to a Wednesday
		const mockDate = new Date("2022-01-05T12:00:00Z")
		dateSpy = jest.spyOn(global, "Date").mockImplementation(() => mockDate)
	})

	afterEach(() => {
		// Restore the original Date object
		dateSpy.mockRestore()
	})

	it("sets the date to the start of the week", () => {
		const date = getDate(WEEK_OR_MONTH.WEEK)
		expect(date.toISOString()).toBe("2022-01-03T00:00:00.000Z") // The start of the week (Monday)
	})

	it("sets the date to the start of the month", () => {
		const date = getDate(WEEK_OR_MONTH.MONTH)
		expect(date.toISOString()).toBe("2022-01-01T00:00:00.000Z") // The start of the month
	})
})
