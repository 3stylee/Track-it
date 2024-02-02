import { getMinsFromSeconds } from "./index"

describe("getMinsFromSeconds", () => {
	it("should correctly convert for a time over a minute but less than 10 minutes", () => {
		const result = getMinsFromSeconds(125)
		expect(result).toBe("2:05")
	})
	it("should correctly convert for a time under a minute", () => {
		const result = getMinsFromSeconds(45)
		expect(result).toBe("0:45")
	})
	it("should correctly convert for a time over 10 minutes but less than an hour", () => {
		const result = getMinsFromSeconds(603)
		expect(result).toBe("10:03")
	})
	it("should correctly convert for a time over an hour", () => {
		const result = getMinsFromSeconds(6002)
		expect(result).toBe("1:40:02")
	})
})
