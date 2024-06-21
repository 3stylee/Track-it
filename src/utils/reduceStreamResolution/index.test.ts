import { reduceResolution } from "./index" // adjust the import path as needed

describe("reduceResolution", () => {
	it("should correctly reduce the resolution of the data in the API response", () => {
		const apiResponse = {
			stream1: {
				data: [1, 2, 3, 4, 5, 6],
				original_size: 6,
			},
			stream2: {
				data: [7, 8, 9, 10, 11, 12],
				original_size: 6,
			},
		}

		const expectedResponse = {
			stream1: {
				data: [1],
				original_size: 6,
			},
			stream2: {
				data: [7],
				original_size: 6,
			},
		}

		const reducedResponse = reduceResolution(apiResponse)

		expect(reducedResponse).toEqual(expectedResponse)
	})
})
