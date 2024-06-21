import { CurrentActivity } from "../../models/activities"
import { Units } from "../../models/state"
import { convertMetersToDistance } from "../convertMetersToDistance"
import { getMinsFromSeconds } from "../getMinsFromSeconds"

/**
 * Creates an array of objects to be used by the Title component of an activity to display the statistics of the activity.
 *
 * @param {CurrentActivity} currentActivity - All the data for the current activity.
 * @param {Units} units - The units to be used for the distance and pace.
 *
 * @returns {Array<Object>} An array of objects, that contain all the stats to be rendered in the Title component.
 */
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
			value: average_speed > 0 ? getMinsFromSeconds(meters / average_speed) : "--:--",
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
