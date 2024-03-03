import { Units } from "../../../../models"
import { CurrentActivity } from "../../subpages/activity/models"
import { convertMetersToDistance } from "../convertMetersToDistance"
import { getMinsFromSeconds } from "../getMinsFromSeconds"

export const getActivityTitleStats = (currentActivity: CurrentActivity, units: Units) => {
	const { distance, moving_time, elapsed_time, average_speed, average_heartrate, max_heartrate } = currentActivity
	const { unitString, meters } = units
	return [
		{
			text: "Distance",
			value: convertMetersToDistance(distance, meters),
			unit: unitString,
		},
		{
			text: "Moving Time",
			value: getMinsFromSeconds(moving_time),
			unit: "",
		},
		{
			text: "Elapsed Time",
			value: getMinsFromSeconds(elapsed_time),
			unit: "",
		},
		{
			text: "Average Pace",
			value: getMinsFromSeconds(meters / average_speed),
			unit: ` /${unitString}`,
		},
		{
			text: "Average Heart Rate",
			value: average_heartrate.toFixed(0),
			unit: "bpm",
		},
		{
			text: "Max Heart Rate",
			value: max_heartrate.toFixed(0),
			unit: "bpm",
		},
	]
}
