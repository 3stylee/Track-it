export interface CurrentActivity {
	id: number
	name: string
	distance: number
	moving_time: number
	start_date: string
	type: string
	elapsed_time: number
	polyline: string
	average_speed: number
	max_speed: number
	has_heartrate: boolean
	average_heartrate: number
	max_heartrate: number
	description: string
	total_elevation_gain: number
	splits_metric: any
	splits_standard: any
	laps: any
}

/**
 * Processes raw activity data and returns an object with selected properties.
 *
 * @param {Object} activityData - An object representing raw activity data.
 *
 * @returns {Object} An object with desired properties.
 */
export const processActivityData = (activityData: any) => {
	return {
		id: activityData.id,
		name: activityData.name,
		distance: activityData.distance,
		moving_time: activityData.moving_time,
		elapsed_time: activityData.elapsed_time,
		polyline: activityData.map.summary_polyline,
		average_speed: activityData.average_speed,
		max_speed: activityData.max_speed,
		has_heartrate: activityData.has_heartrate,
		average_heartrate: activityData.average_heartrate,
		max_heartrate: activityData.max_heartrate,
		description: activityData.description,
		total_elevation_gain: activityData.total_elevation_gain,
		splits_metric: activityData.splits_metric,
		splits_standard: activityData.splits_standard,
		laps: activityData.laps,
		date: activityData.start_date,
		type: activityData.type,
	}
}
