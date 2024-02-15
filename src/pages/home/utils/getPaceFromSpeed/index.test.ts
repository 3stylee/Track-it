import { getPaceFromSpeed } from "./index"

describe("getPaceFromSpeed", () => {
	it("should correctly calculate pace from speed", () => {
		const speed = "8"
		const result = getPaceFromSpeed(speed, 1000)
		expect(result).toBe("2:05/km")
	})
})
