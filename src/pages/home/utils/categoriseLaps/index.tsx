import { Lap } from "../../subpages/activity/models"

export const categoriseLaps = (laps: Lap[]) => {
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
