type ProcessedActivity = {
	athlete: {
		id: number
	}
	title: string
	time: number
	distance: number
	polyline: string
	id: number
	start: string
	speed: number
	type: string
	elevation: number
	heartrate: number
	predictedType: string
}

export type AthleteActivities = ProcessedActivity[]
