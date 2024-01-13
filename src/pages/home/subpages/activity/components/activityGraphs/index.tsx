import React from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import { getTimeSeries } from "../../../../utils/getTimeSeries"
import { STREAM_RESOLUTION_FACTOR } from "../../../../../../constants"
import { getSecondsPerKm } from "../../../../utils/getSecondsPerKm"
import { getPaceOptions } from "./graphOptions/paceOptions"
import { getHeartrateOptions } from "./graphOptions/heartrateOptions"

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
				<div className="card h-100">
					<div className="card-body">
						<div className="card-text">
							<LineChart
								time={time}
								streamData={paceStreamData}
								backgroundColor={"rgba(102, 61, 255, 0.7)"}
								options={paceOptions}
							/>
						</div>
					</div>
				</div>
				<div className="card h-100 mt-5">
					<div className="card-body">
						<div className="card-text">
							<LineChart
								time={time}
								label={"Heart Rate"}
								streamData={heartRateStreamData}
								backgroundColor={"rgba(204, 68, 153, 0.7)"}
								options={heartRateOptions}
							/>
						</div>
					</div>
				</div>
			</>
		)
	}
	return null
}

export default connect(ActivityGraphs)
