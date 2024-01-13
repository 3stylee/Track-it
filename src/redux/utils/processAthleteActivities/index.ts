export interface Activity {
	name: string
	distance: string
	map: { summary_polyline: string }
	id: number
}

export const processAthleteActivities = (data: Activity[]) => {
	const processedData = data.map((activity: Activity) => ({
		name: activity.name,
		distance: activity.distance,
		polyline: activity.map.summary_polyline,
		id: activity.id,
	}))
	return processedData
}
