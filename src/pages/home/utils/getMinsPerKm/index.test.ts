import { getMinsPerKm } from "./index"

describe("getMinsPerKm", () => {
	it("should correctly convert for a pace over a minute but less than 10 minutes", () => {
		const result = getMinsPerKm(125)
		expect(result).toBe("2:05/km")
	})
	it("should correctly convert for a pace under a minute", () => {
		const result = getMinsPerKm(45)
		expect(result).toBe("0:45/km")
	})
	it("should correctly convert for a pace over 10 minutes but less than an hour", () => {
		const result = getMinsPerKm(603)
		expect(result).toBe("10:03/km")
	})
})
