import { Units } from "../../../../models"
import { CurrentActivity, CurrentActivityStream } from "../../subpages/activity/models"
import { getActivityGraphData } from "../getActivityGraphData"

/**
 * Generates an array of objects of data that can be used to render the activity graphs.
 *
 * @param {CurrentActivityStream} currentActivityStream - The stream data of the current activity.
 * @param {CurrentActivity} currentActivity - The data of the current activity.
 * @param {string} theme - The theme for the graph options.
 * @param {Units} units - The units to be used for the graph data.
 *
 * @returns {Array<Object>} An array of objects, each containing the data the ActivityGraph component needs to render a graph.
 */
export const getActivityGraphs = (
	currentActivityStream: CurrentActivityStream,
	currentActivity: CurrentActivity,
	theme: string,
	units: Units
) => {
	const {
		time,
		paceStreamData,
		paceOptions,
		heartRateStreamData,
		heartRateOptions,
		altitudeStreamData,
		altitudeOptions,
	} = getActivityGraphData(currentActivityStream, currentActivity, theme, units)
	return [
		{
			time,
			label: "Pace",
			data: paceStreamData,
			options: paceOptions,
			backgroundColor: "rgba(102, 61, 255, 0.7)",
		},
		{
			time,
			label: "Heart Rate",
			data: heartRateStreamData,
			options: heartRateOptions,
			backgroundColor: "rgba(204, 68, 153, 0.7)",
		},
		{
			time,
			label: "Altitude",
			data: altitudeStreamData,
			options: altitudeOptions,
			backgroundColor: "rgba(68, 118, 243, 0.7)",
		},
	]
}
