export interface Activity {
	name: string
	moving_time: number
	distance: number
	map: { summary_polyline: string }
	athlete: { id: number }
	id: number
	average_speed: number
	start_date: string
	type: string
	total_elevation_gain: number
	average_heartrate: number
}

/**
 * Processes an array of raw athlete activities and returns an array of processed activities.
 *
 * @param {Activity[]} data - An array of raw Activity objects.
 *
 * @returns {Object[]} An array of objects, each representing a processed activity.
 */
export const processAthleteActivities = (data: Activity[], predictedTypes?: string[]) => {
	const processedData = data.map((activity: Activity, index) => ({
		athlete: {
			id: activity.athlete.id,
		},
		title: activity.name,
		time: activity.moving_time,
		distance: activity.distance,
		polyline: activity.map.summary_polyline,
		id: activity.id,
		start: activity.start_date,
		speed: activity.average_speed,
		type: activity.type,
		elevation: activity.total_elevation_gain,
		heartrate: activity.average_heartrate || 0,
		predictedType: predictedTypes ? predictedTypes[index] : "",
	}))
	return processedData
}
