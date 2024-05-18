import { Lap } from "../../subpages/activity/models"

/**
 * Will categorise laps into Effort and Recovery based on the average speed of the laps
 * @param {Array} laps - A list of laps to categorise
 * @returns {Array} A list of the categorised laps
 */
export const categoriseLaps = (laps: Lap[], session: boolean) => {
	if (!session) return []
	const averageLapSpeed = getAverageLapSpeed(laps)
	const categorisedLaps: string[] = []
	laps.forEach((lap) => {
		if (lap.average_speed >= averageLapSpeed - averageLapSpeed * 0.1) {
			categorisedLaps.push("Effort")
		} else {
			categorisedLaps.push("Recovery")
		}
	})
	return categorisedLaps
}

const getAverageLapSpeed = (laps: Lap[]) => {
	return laps.reduce((acc, lap) => acc + lap.average_speed, 0) / laps.length
}
