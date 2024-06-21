interface AthleteData {
	biggest_ride_distance: number
	biggest_climb_elevation_gain: number
	recent_ride_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
		achievement_count: number
	}
	all_ride_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
	}
	recent_run_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
		achievement_count: number
	}
	all_run_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
	}
	recent_swim_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
		achievement_count: number
	}
	all_swim_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
	}
	ytd_ride_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
	}
	ytd_run_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
	}
	ytd_swim_totals: {
		count: number
		distance: number
		moving_time: number
		elapsed_time: number
		elevation_gain: number
	}
}

/**
 * Processes a raw object of athlete data and returns an object with selected properties.
 *
 * @param {AthleteData} data - An array of raw Athlete data.
 *
 * @returns {Object} A processed object with desired properties.
 */
export const processAthleteData = (data: AthleteData) => {
	return {
		yearTotalRuns: data.ytd_run_totals.count,
		yearTotalRunDistance: data.ytd_run_totals.distance,
		allTotalRuns: data.all_run_totals.count,
		allTotalRunDistance: data.all_run_totals.distance,
	}
}
