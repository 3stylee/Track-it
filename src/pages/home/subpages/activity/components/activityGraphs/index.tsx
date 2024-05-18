import React from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import { CenteredDiv } from "./components"
import LapsTable from "../lapsTable"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Card, Col, Row } from "react-bootstrap"
import { getActivityGraphs } from "../../../../utils/getActivityGraphs"
import { CurrentActivity, Lap, CurrentActivityStream } from "../../models"
import { Units } from "../../../../../../models"

interface ActivityGraphsProps {
	currentActivityStream: CurrentActivityStream
	currentActivity: CurrentActivity
	laps: Lap[]
	units: Units
}

export const ActivityGraphs = ({ currentActivityStream, currentActivity, laps, units }: ActivityGraphsProps) => {
	const theme = useTheme()
	if (currentActivity.type !== "Run") {
		return null
	}
	if (currentActivityStream.distance) {
		const graphs = getActivityGraphs(currentActivityStream, currentActivity, theme.name, units)
		return (
			<Row xl={2} lg={1} md={1} sm={1} xs={1} className="g-4">
				<Col>
					<LapsTable laps={laps} />
				</Col>
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
				<h2>Error finding data</h2>
				<p>Please refresh, or try another activity</p>
				<FeatherIcon icon="alert-triangle" size={"7rem"} />
			</CenteredDiv>
		</Card>
	)
}

export default connect(ActivityGraphs)
