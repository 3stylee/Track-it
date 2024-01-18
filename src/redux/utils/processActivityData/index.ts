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
	}
}
