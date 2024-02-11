import { STREAM_RESOLUTION_FACTOR } from "../../../../constants"
import { getAltitudeOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/altitudeOptions"
import { getHeartrateOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/heartrateOptions"
import { getPaceOptions } from "../../subpages/activity/components/activityGraphs/graphOptions/paceOptions"
import { getSecondsPerKm } from "../getSecondsPerKm"
import { getTimeSeries } from "../getTimeSeries"

export const getActivityGraphData = (currentActivityStream: any, currentActivity: any, theme: string) => {
	const length = parseInt(currentActivityStream.distance.original_size) / STREAM_RESOLUTION_FACTOR
	const time = getTimeSeries(length)

	const paceStreamData = getSecondsPerKm(currentActivityStream.distance.data)
	const averagePace = 1000 / currentActivity.average_speed
	const paceOptions = getPaceOptions(length, theme, Math.min(...paceStreamData), averagePace)

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
