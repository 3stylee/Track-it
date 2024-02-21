export interface Activity {
	name: string
	moving_time: number
	distance: string
	map: { summary_polyline: string }
	athlete: { id: number }
	id: number
	average_speed: number
	start_date: string
	type: string
	total_elevation_gain: number
	average_heartrate: number
}

export const processAthleteActivities = (data: Activity[]) => {
	const processedData = data.map((activity: Activity) => ({
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
		heartrate: activity.average_heartrate,
	}))
	return processedData
}
