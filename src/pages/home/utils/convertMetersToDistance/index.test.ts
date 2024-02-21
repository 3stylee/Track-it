import { convertMetersToDistance } from "./index"

describe("convertMetersToDistance", () => {
	it("should correctly convert meters to kilometers", () => {
		const result = convertMetersToDistance(5000, 1000)
		expect(result).toBe("5.00")
	})

	it("should correctly convert meters to miles", () => {
		const result = convertMetersToDistance(1609, 1609)
		expect(result).toBe("1.00")
	})

	it("should handle non-integer inputs", () => {
		const result = convertMetersToDistance(1500.5, 1000)
		expect(result).toBe("1.50")
	})
})
