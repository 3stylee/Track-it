import { getPaceFromSpeed } from "./index"

describe("getPaceFromSpeed", () => {
	it("should correctly calculate pace from speed", () => {
		const result = getPaceFromSpeed(8, 1000)
		expect(result).toBe("2:05")
	})
})
