import { processAthleteActivities, Activity } from "."

describe("processAthleteActitivies", () => {
	it("processes an array of Activity objects", () => {
		const activities: Activity[] = [
			{
				name: "Run in the park",
				distance: "5000",
				map: { summary_polyline: "_p~iF~ps|U_ulLnnqC_mqNvxq`@" },
				id: 1,
				athlete: { id: 1 },
				start_date: "2020-01-01T00:00:00Z",
			},
			{
				name: "Bike ride",
				distance: "15000",
				map: { summary_polyline: "_ibE_seK_seK_seK" },
				id: 2,
				athlete: { id: 2 },
				start_date: "2020-01-01T00:00:00Z",
			},
		]
		const expected = [
			{
				name: "Run in the park",
				distance: "5000",
				polyline: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
				id: 1,
				athlete: { id: 1 },
				startDate: "2020-01-01T00:00:00Z",
			},
			{
				name: "Bike ride",
				distance: "15000",
				polyline: "_ibE_seK_seK_seK",
				id: 2,
				athlete: { id: 2 },
				startDate: "2020-01-01T00:00:00Z",
			},
		]

		const result = processAthleteActivities(activities)

		expect(result).toEqual(expected)
	})
})
