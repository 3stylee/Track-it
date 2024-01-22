import React from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import { getTimeSeries } from "../../../../utils/getTimeSeries"
import { STREAM_RESOLUTION_FACTOR } from "../../../../../../constants"
import { getSecondsPerKm } from "../../../../utils/getSecondsPerKm"
import { getPaceOptions } from "./graphOptions/paceOptions"
import { getHeartrateOptions } from "./graphOptions/heartrateOptions"
import { Card } from "../../../../../../globalComponents/bootstrapCard"

export const ActivityGraphs = ({ currentActivityStream }: any) => {
	if (currentActivityStream.distance) {
		const length = parseInt(currentActivityStream.distance.original_size) / STREAM_RESOLUTION_FACTOR
		const time = getTimeSeries(length)

		const paceStreamData = getSecondsPerKm(currentActivityStream.distance.data)
		const paceOptions = getPaceOptions(length, Math.min(...paceStreamData))
		const heartRateStreamData = currentActivityStream.heartrate.data
		const heartRateOptions = getHeartrateOptions(length)
		return (
			<>
				<Card>
					<LineChart
						time={time}
						streamData={paceStreamData}
						backgroundColor={"rgba(102, 61, 255, 0.7)"}
						options={paceOptions}
					/>
				</Card>
				<Card styles={{ "margin-top": "3rem" }}>
					<LineChart
						time={time}
						label={"Heart Rate"}
						streamData={heartRateStreamData}
						backgroundColor={"rgba(204, 68, 153, 0.7)"}
						options={heartRateOptions}
					/>
				</Card>
			</>
		)
	}
	return null
}

export default connect(ActivityGraphs)
