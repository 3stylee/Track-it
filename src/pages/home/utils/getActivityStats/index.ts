import { Units } from "../../../../config/models"
import { Stat } from "../../../../globalComponents/labelledStats"
import { convertMetersToDistance } from "../convertMetersToDistance"
import { getMinsFromSeconds } from "../getMinsFromSeconds"
import { getPaceFromSpeed } from "../getPaceFromSpeed"

export const getActivityStats = (distance: string, speed: string, time: number, units: Units) => {
	const stats: Stat[] = [
		{
			text: "Distance",
			value: convertMetersToDistance(distance, units.meters),
			unit: units.unitString,
			icon: "map-pin",
		},
		{
			text: "Pace",
			value: getPaceFromSpeed(speed, units.meters),
			unit: `/${units.unitString}`,
			icon: "watch",
		},
		{
			text: "Time",
			value: getMinsFromSeconds(time),
			unit: "",
			icon: "clock",
		},
	]
	return stats
}
