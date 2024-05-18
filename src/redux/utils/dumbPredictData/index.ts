export interface dumbPredictors {
	average_heartrate: number
	average_speed: number
	type: string
	distance: number
}

/**
 * Predicts the type of each run in a dataset (tempo, long run etc...). Done using a simple rule-based system hence the name "dumb".
 *
 * @param {dumbPredictors[]} data - An array of objects, each representing an activity.
 *
 * @returns {string[]} An array of strings, each representing the predicted type of a specific activity.
 */
export const dumbPredictData = (data: dumbPredictors[]) => {
	const results = []
	for (let row of data) {
		if (row.type !== "Run") results.push(row.type)
		else if (row.distance > 13000) results.push("Long Run")
		else results.push(classifyWorkout(row.average_heartrate, row.average_speed))
	}
	return results
}

/**
 * Classifies a workout based on the average heart rate and speed.
 *
 * @param {number} avg_bpm - The average heart rate during the workout in beats per minute.
 * @param {number} avg_speed - The average speed during the workout in kilometers per hour.
 *
 * @returns {string} A string representing the type of the workout.
 */
export const classifyWorkout = (avg_bpm: number, avg_speed: number) => {
	let easyScore = 0
	let tempoScore = 0
	let sessionScore = 0

	// Scoring for average heart rate (bpm)
	if (avg_bpm <= 160) {
		easyScore += 1 + (160 - avg_bpm) / 10 // Adding more score for lower bpm
	} else if (avg_bpm >= 161 && avg_bpm <= 180) {
		tempoScore += 1
	} else if (avg_bpm > 180) {
		sessionScore += 1 + (avg_bpm - 180) / 10 // Adding more score for higher bpm
	}

	// Scoring for average speed
	if (avg_speed >= 3 && avg_speed <= 4) {
		easyScore += 1 + (4 - avg_speed) // Adding more score for lower speed in Easy category
	} else if (avg_speed >= 4 && avg_speed <= 5) {
		tempoScore += 1
	} else if (avg_speed > 5) {
		sessionScore += 1 + (avg_speed - 5) / 2 // Adding more score for higher speed
	}

	// Determine the classification based on scores
	if (easyScore >= tempoScore && easyScore >= sessionScore) {
		return "Easy"
	} else if (tempoScore >= easyScore && tempoScore >= sessionScore) {
		return "Tempo"
	} else {
		return "Session"
	}
}
