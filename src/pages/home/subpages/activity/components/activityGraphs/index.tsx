import React, { useContext } from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import { getTimeSeries } from "../../../../utils/getTimeSeries"
import { STREAM_RESOLUTION_FACTOR } from "../../../../../../constants"
import { getSecondsPerKm } from "../../../../utils/getSecondsPerKm"
import { getPaceOptions } from "./graphOptions/paceOptions"
import { getHeartrateOptions } from "./graphOptions/heartrateOptions"
import { Card } from "../../../../../../globalComponents/bootstrapCard"
import { CenteredDiv, GraphsContainer } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"

export const ActivityGraphs = ({ currentActivityStream }: any) => {
	const { theme } = useContext(ThemeContext)
	if (currentActivityStream.distance) {
		const length = parseInt(currentActivityStream.distance.original_size) / STREAM_RESOLUTION_FACTOR
		const time = getTimeSeries(length)

		const paceStreamData = getSecondsPerKm(currentActivityStream.distance.data)
		const paceOptions = getPaceOptions(length, theme, Math.min(...paceStreamData))
		const heartRateStreamData = currentActivityStream.heartrate.data
		const heartRateOptions = getHeartrateOptions(length, theme)
		return (
			<GraphsContainer>
				<Card>
					<LineChart
						time={time}
						streamData={paceStreamData}
						backgroundColor={"rgba(102, 61, 255, 0.7)"}
						options={paceOptions}
					/>
				</Card>
				<Card>
					<LineChart
						time={time}
						label={"Heart Rate"}
						streamData={heartRateStreamData}
						backgroundColor={"rgba(204, 68, 153, 0.7)"}
						options={heartRateOptions}
					/>
				</Card>
			</GraphsContainer>
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
