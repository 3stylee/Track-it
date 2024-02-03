import React, { useContext } from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import { getTimeSeries } from "../../../../utils/getTimeSeries"
import { STREAM_RESOLUTION_FACTOR } from "../../../../../../constants"
import { getSecondsPerKm } from "../../../../utils/getSecondsPerKm"
import { getPaceOptions } from "./graphOptions/paceOptions"
import { getHeartrateOptions } from "./graphOptions/heartrateOptions"
import { Card } from "../../../../../../globalComponents/bootstrapCard"
import { CenteredDiv } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"
import { getAltitudeOptions } from "./graphOptions/altitudeOptions"

export const ActivityGraphs = ({ currentActivityStream }: any) => {
	const { theme } = useContext(ThemeContext)
	if (currentActivityStream.distance) {
		const length = parseInt(currentActivityStream.distance.original_size) / STREAM_RESOLUTION_FACTOR
		const time = getTimeSeries(length)

		const paceStreamData = getSecondsPerKm(currentActivityStream.distance.data)
		const averagePace = paceStreamData.reduce((a, b) => a + b, 0) / paceStreamData.length
		const paceOptions = getPaceOptions(length, theme, Math.min(...paceStreamData), averagePace)

		const heartRateStreamData: number[] = currentActivityStream.heartrate.data
		const averageHeartRate = heartRateStreamData.reduce((a, b) => a + b, 0) / heartRateStreamData.length
		const heartRateOptions = getHeartrateOptions(length, theme, averageHeartRate)

		const altitudeStreamData: number[] = currentActivityStream.altitude.data
		const altitudeOptions = getAltitudeOptions(length, theme)

		return (
			<>
				<div className="col">
					<Card>
						<LineChart
							time={time}
							streamData={paceStreamData}
							backgroundColor={"rgba(102, 61, 255, 0.7)"}
							options={paceOptions}
						/>
					</Card>
				</div>
				<div className="col">
					<Card>
						<LineChart
							time={time}
							label={"Heart Rate"}
							streamData={heartRateStreamData}
							backgroundColor={"rgba(204, 68, 153, 0.7)"}
							options={heartRateOptions}
						/>
					</Card>
				</div>
				<div className="col">
					<Card>
						<LineChart
							time={time}
							label={"Altitude"}
							streamData={altitudeStreamData}
							backgroundColor={"rgba(68, 118, 243, 0.7)"}
							options={altitudeOptions}
						/>
					</Card>
				</div>
			</>
		)
	}
	return (
		<Card styles={{ height: "calc(100vh - 6rem)" }}>
			<CenteredDiv>
				<h2>Error finding data</h2>
				<p>Please refresh, or try another activity</p>
				<img src={require("../../../../../../assets/icons/error.ico")} alt="error" />
			</CenteredDiv>
		</Card>
	)
}

export default connect(ActivityGraphs)
