import React from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import { Card } from "../../../../../../globalComponents/bootstrapCard"
import { CenteredDiv } from "./components"
import { LapsTable } from "../lapsTable"
import { getActivityGraphData } from "../../../../utils/getActivityGraphData"
import { useTheme } from "@emotion/react"

export const ActivityGraphs = ({ currentActivityStream, currentActivity, laps }: any) => {
	const theme = useTheme()
	if (currentActivityStream.distance) {
		const {
			time,
			paceStreamData,
			paceOptions,
			heartRateStreamData,
			heartRateOptions,
			altitudeStreamData,
			altitudeOptions,
		} = getActivityGraphData(currentActivityStream, currentActivity, theme.name)

		return (
			<div className="row row-cols-1 row-cols-xl-2 g-4">
				<div className="col">
					<LapsTable laps={laps} />
				</div>
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
			</div>
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
