import { Units } from "../../../../models"
import { STREAM_RESOLUTION_FACTOR } from "../../../../constants/constants"
import { getAltitudeOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/altitudeOptions"
import { getHeartrateOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/heartrateOptions"
import { getPaceOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/paceOptions"
import { getSecondsPerUnit } from "../getSecondsPerUnit"
import { getTimeSeries } from "../getTimeSeries"
import { CurrentActivity, CurrentActivityStream } from "../../subpages/activity/models"

/**
 * Prepares the data for the activity graphs including pace, heart rate, and altitude.
 *
 * @param {CurrentActivityStream} currentActivityStream - The stream data of the current activity.
 * @param {CurrentActivity} currentActivity - The data of the current activity.
 * @param {string} theme - The theme for the graph options.
 * @param {Units} units - The units to be used for the graph data.
 *
 * @returns {Object} An object containing the data needed to construct the graphs
 */
export const getActivityGraphData = (
	currentActivityStream: CurrentActivityStream,
	currentActivity: CurrentActivity,
	theme: string,
	units: Units
) => {
	const length = currentActivityStream.distance.original_size / STREAM_RESOLUTION_FACTOR
	const time = getTimeSeries(length)

	const paceStreamData = getSecondsPerUnit(currentActivityStream.distance.data, units.meters)
	const averagePace = units.meters / currentActivity.average_speed
	const paceOptions = getPaceOptions(length, theme, Math.min(...paceStreamData), averagePace, units)

	const heartRateStreamData: number[] = currentActivityStream.heartrate.data
	const averageHeartRate = currentActivity.average_heartrate
	const heartRateOptions = getHeartrateOptions(length, theme, averageHeartRate)

	const altitudeStreamData: number[] = currentActivityStream.altitude.data
	const totalElevationGain = currentActivity.total_elevation_gain
	const altitudeOptions = getAltitudeOptions(length, theme, Math.max(...altitudeStreamData), totalElevationGain)

	return {
		time,
		paceStreamData,
		paceOptions,
		heartRateStreamData,
		heartRateOptions,
		altitudeStreamData,
		altitudeOptions,
	}
}
