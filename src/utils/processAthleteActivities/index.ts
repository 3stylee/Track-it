export interface Activity {
	name: string
	moving_time: number
	distance: number
	map: { summary_polyline: string }
	athlete: { id: number }
	id: number
	average_speed: number
	max_speed: number
	average_caedence: number
	start_date: string
	type: string
	total_elevation_gain: number
	average_heartrate: number
	polyline?: string
	date?: string
}

/**
 * Processes an array of raw athlete activities and returns an array of processed activities.
 *
 * @param {Activity[]} data - An array of raw Activity objects.
 * @param {string[]} predictedTypes - An array of predicted activity types.
 *
 * @returns {Object[]} An array of objects, each representing a processed activity.
 */
export const processAthleteActivities = (data: Activity[], predictedTypes?: string[], currentActivity = false) => {
	const processedData = data.map((activity: Activity, index) => ({
		athlete: {
			id: currentActivity ? activity.id : activity.athlete.id,
		},
		title: activity.name,
		time: activity.moving_time,
		distance: activity.distance,
		polyline: currentActivity ? activity.polyline : activity.map.summary_polyline,
		id: activity.id,
		start: currentActivity ? activity.date : activity.start_date,
		speed: activity.average_speed,
		maxSpeed: activity.max_speed,
		cadence: activity.average_caedence || 0,
		type: activity.type,
		elevation: activity.total_elevation_gain,
		heartrate: activity.average_heartrate || 0,
		predictedType: predictedTypes ? predictedTypes[index] : "",
	}))
	return processedData
}
