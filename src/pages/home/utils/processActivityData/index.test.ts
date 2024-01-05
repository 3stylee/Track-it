import { processActivityData, Activity } from "."

describe("processActivityData", () => {
	it("processes an array of Activity objects", () => {
		const activities: Activity[] = [
			{
				name: "Run in the park",
				distance: "5000",
				map: { summary_polyline: "_p~iF~ps|U_ulLnnqC_mqNvxq`@" },
				id: 1,
			},
			{
				name: "Bike ride",
				distance: "15000",
				map: { summary_polyline: "_ibE_seK_seK_seK" },
				id: 2,
			},
		]
		const expected = [
			{
				name: "Run in the park",
				distance: "5000",
				polyline: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
				id: 1,
			},
			{
				name: "Bike ride",
				distance: "15000",
				polyline: "_ibE_seK_seK_seK",
				id: 2,
			},
		]

		const result = processActivityData(activities)

		expect(result).toEqual(expected)
	})
})
