import { Units } from "../../../../config/models"
import { STREAM_RESOLUTION_FACTOR } from "../../../../constants"
import { getAltitudeOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/altitudeOptions"
import { getHeartrateOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/heartrateOptions"
import { getPaceOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/paceOptions"
import { getSecondsPerUnit } from "../getSecondsPerUnit"
import { getTimeSeries } from "../getTimeSeries"

export const getActivityGraphData = (currentActivityStream: any, currentActivity: any, theme: string, units: Units) => {
	const length = parseInt(currentActivityStream.distance.original_size) / STREAM_RESOLUTION_FACTOR
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
