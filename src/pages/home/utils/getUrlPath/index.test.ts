import { getUrlPath } from "./index"

describe("getUrlPath", () => {
	it('should return empty string if last segment is "home"', () => {
		const location = { pathname: "/user/home" }
		expect(getUrlPath(location)).toBe("")
	})

	it('should return "search" if last segment is "activity"', () => {
		const location = { pathname: "/user/activity" }
		expect(getUrlPath(location)).toBe("search")
	})

	it('should return last segment if it is not "home" or "activity"', () => {
		const location = { pathname: "/user/profile" }
		expect(getUrlPath(location)).toBe("profile")
	})
})
