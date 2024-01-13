import { getMinsFromSeconds } from "./index"

describe("getMinsFromSeconds", () => {
	it("should correctly convert for a pace over a minute but less than 10 minutes", () => {
		const result = getMinsFromSeconds(125)
		expect(result).toBe("2:05")
	})
	it("should correctly convert for a pace under a minute", () => {
		const result = getMinsFromSeconds(45)
		expect(result).toBe("0:45")
	})
	it("should correctly convert for a pace over 10 minutes but less than an hour", () => {
		const result = getMinsFromSeconds(603)
		expect(result).toBe("10:03")
	})
})
