export interface Lap {
	id: number
	resource_state: number
	name: string
	activity: {
		id: number
		visibility: string
		resource_state: number
	}
	athlete: {
		id: number
		resource_state: number
	}
	elapsed_time: number
	moving_time: number
	start_date: string
	start_date_local: string
	distance: number
	average_speed: number
	max_speed: number
	lap_index: number
	split: number
	start_index: number
	end_index: number
	total_elevation_gain: number
	average_cadence: number
	device_watts: boolean
	average_watts: number
	average_heartrate: number
	max_heartrate: number
	pace_zone: number
}

export interface CurrentActivity {
	id: number
	name: string
	distance: number
	moving_time: number
	elapsed_time: number
	polyline: string
	average_speed: number
	max_speed: number
	has_heartrate: boolean
	average_heartrate: number
	max_heartrate: number
	description: string
	total_elevation_gain: number
	splits_metric: object[]
	splits_standard: object[]
	laps: Lap[]
	date: string
	type: string
	predictedType: string
}

export interface CurrentActivityStream {
	distance: {
		data: number[]
		original_size: number
		series_type: string
		resolution: string
	}
	heartrate: {
		data: number[]
		original_size: number
		series_type: string
		resolution: string
	}
	altitude: {
		data: number[]
		original_size: number
		series_type: string
		resolution: string
	}
	time: {
		data: number[]
		original_size: number
		series_type: string
		resolution: string
	}
}
