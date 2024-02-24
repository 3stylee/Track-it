import { Units } from "../../../../models"
import { Stat } from "../../../../globalComponents/labelledStats"
import { convertMetersToDistance } from "../convertMetersToDistance"
import { getMinsFromSeconds } from "../getMinsFromSeconds"
import { getPaceFromSpeed } from "../getPaceFromSpeed"

export const getActivityStats = (distance: number, speed: number, time: number, units: Units) => {
	const stats: Stat[] = [
		{
			text: "Distance",
			value: convertMetersToDistance(distance, units.meters),
			unit: units.unitString,
		},
		{
			text: "Pace",
			value: getPaceFromSpeed(speed, units.meters),
			unit: `/${units.unitString}`,
		},
		{
			text: "Time",
			value: getMinsFromSeconds(time),
			unit: "",
		},
	]
	return stats
}
