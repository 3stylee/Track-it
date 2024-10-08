import { processAthleteActivities, Activity } from "."

describe("processAthleteActitivies", () => {
	it("processes an array of Activity objects", () => {
		const activities: Activity[] = [
			{
				name: "Run in the park",
				distance: 5000,
				moving_time: 1000,
				map: { summary_polyline: "_p~iF~ps|U_ulLnnqC_mqNvxq`@" },
				id: 1,
				athlete: { id: 1 },
				start_date: "2020-01-01T00:00:00Z",
				average_speed: 5,
				max_speed: 10,
				average_caedence: 150,
				type: "Run",
				total_elevation_gain: 100,
				average_heartrate: 150,
			},
			{
				name: "Bike ride",
				distance: 15000,
				moving_time: 1500,
				map: { summary_polyline: "_ibE_seK_seK_seK" },
				id: 2,
				athlete: { id: 2 },
				start_date: "2020-01-01T00:00:00Z",
				average_speed: 10,
				max_speed: 10,
				average_caedence: 150,
				type: "Run",
				total_elevation_gain: 100,
				average_heartrate: 150,
			},
		]
		const expected = [
			{
				title: "Run in the park",
				distance: 5000,
				time: 1000,
				polyline: "_p~iF~ps|U_ulLnnqC_mqNvxq`@",
				id: 1,
				athlete: { id: 1 },
				start: "2020-01-01T00:00:00Z",
				speed: 5,
				maxSpeed: 10,
				cadence: 150,
				type: "Run",
				elevation: 100,
				heartrate: 150,
			},
			{
				title: "Bike ride",
				distance: 15000,
				time: 1500,
				polyline: "_ibE_seK_seK_seK",
				id: 2,
				athlete: { id: 2 },
				start: "2020-01-01T00:00:00Z",
				speed: 10,
				maxSpeed: 10,
				cadence: 150,
				type: "Run",
				elevation: 100,
				heartrate: 150,
			},
		]

		const result = processAthleteActivities(activities)

		expect(result).toEqual(expected)
	})
})
