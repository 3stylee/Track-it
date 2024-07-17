import React from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import LapsTable from "../lapsTable"
import { useTheme } from "@emotion/react"
import { Card, Col, Row } from "react-bootstrap"
import { getActivityGraphs } from "../../../../utils/getActivityGraphs"
import { Units } from "../../../../models/state"
import { CenteredDiv } from "./components"
import { CurrentActivity, CurrentActivityStream } from "../../../../models/activities"
import { AlertTriangle } from "react-feather"
import useSmallScreen from "./useSmallScreen"

interface ActivityGraphsProps {
	currentActivityStream: CurrentActivityStream
	currentActivity: CurrentActivity
	units: Units
}

export const ActivityGraphs = ({ currentActivityStream, currentActivity, units }: ActivityGraphsProps) => {
	const theme = useTheme()
	const smallScreen = useSmallScreen()
	const graphData =
		currentActivityStream.distance || currentActivityStream.heartrate || currentActivityStream.altitude
	if (graphData) {
		const graphs = getActivityGraphs(currentActivityStream, currentActivity, theme.name, units, smallScreen)
		const { laps } = currentActivity
		return (
			<Row sm={1} className="g-1 g-lg-4">
				{laps.length > 1 && (
					<Col>
						<LapsTable laps={laps} />
					</Col>
				)}
				{graphs.map((graph) => {
					const { time, label, data, options, backgroundColor } = graph
					return (
						<Col key={label}>
							<Card bg={theme.bootstrap.background} text={theme.bootstrap.textColor}>
								<Card.Body>
									<LineChart
										time={time}
										label={label}
										streamData={data}
										backgroundColor={backgroundColor}
										options={options}
									/>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
			</Row>
		)
	}
	return (
		<Card style={{ height: "calc(100vh - 6rem)" }} bg={theme.bootstrap.background} text={theme.bootstrap.textColor}>
			<CenteredDiv>
				<h2>No graph gata for this activity</h2>
				<AlertTriangle size={"7rem"} />
			</CenteredDiv>
		</Card>
	)
}

export default connect(ActivityGraphs)
