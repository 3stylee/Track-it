import React from "react"
import { LineChart } from "../lineChart"
import connect from "./connect"
import LapsTable from "../lapsTable"
import { useTheme } from "@emotion/react"
import { Card, Col, Row } from "react-bootstrap"
import { getActivityGraphs } from "../../../../utils/getActivityGraphs"
import { Units } from "../../../../models/state"
import { StyledCard } from "./components"
import { CurrentActivity, CurrentActivityStream } from "../../../../models/activities"
import useSmallScreen from "./useSmallScreen"
import { placeholderOptions } from "./graphOptions/placeholderOptions"

interface ActivityGraphsProps {
	currentActivityStream: CurrentActivityStream
	currentActivity: CurrentActivity
	units: Units
	loading: boolean
}

export const ActivityGraphs = ({ currentActivityStream, currentActivity, units, loading }: ActivityGraphsProps) => {
	const theme = useTheme()
	const smallScreen = useSmallScreen()
	const graphs = getActivityGraphs(currentActivityStream, currentActivity, theme.name, units, smallScreen)
	const { laps } = currentActivity
	return (
		<Row sm={1} className="g-1 g-lg-4">
			{loading ? (
				<Col>
					<StyledCard>
						<Card.Body className="p-3">
							<LineChart
								time={["00:00", "00:15", "00:30", "00:45", "01:00", "01:15", "01:30", "01:45", "02:00"]}
								label=""
								streamData={[200, 500, 300, 400, 300, 450, 300, 350, 400]}
								backgroundColor={theme.loading.placeholderBackground}
								options={placeholderOptions}
							/>
						</Card.Body>
					</StyledCard>
				</Col>
			) : (
				graphs?.map((graph) => {
					const { time, label, data, options, backgroundColor } = graph
					return (
						<Col key={label}>
							<StyledCard>
								<Card.Body>
									<LineChart
										time={time}
										label={label}
										streamData={data}
										backgroundColor={backgroundColor}
										options={options}
									/>
								</Card.Body>
							</StyledCard>
						</Col>
					)
				})
			)}
			<Col>
				<LapsTable laps={laps} />
			</Col>
		</Row>
	)
}

export default connect(ActivityGraphs)
