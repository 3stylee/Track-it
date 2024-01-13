export interface Activity {
	name: string
	distance: string
	map: { summary_polyline: string }
	athlete: { id: number }
	id: number
	start_date: string
}

export const processAthleteActivities = (data: Activity[]) => {
	const processedData = data.map((activity: Activity) => ({
		athlete: {
			id: activity.athlete.id,
		},
		name: activity.name,
		distance: activity.distance,
		polyline: activity.map.summary_polyline,
		id: activity.id,
		start_date: activity.start_date,
	}))
	return processedData
}
