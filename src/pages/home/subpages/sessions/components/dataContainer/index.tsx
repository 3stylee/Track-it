import React from "react"
import { AthleteActivities } from "../../../activitiesList/models"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Card, Col, Row } from "react-bootstrap"
import { Container } from "./components"
import connect from "./connect"
import { getSessions } from "../../../../utils/getSessions"

export interface DataContainerProps {
	athleteActivities: AthleteActivities
	apiCallsInProgress: number
	copyStravaActivities: (dateBefore: number) => void
}

export const DataContainer = ({ athleteActivities, apiCallsInProgress, copyStravaActivities }: DataContainerProps) => {
	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	const data = getSessions(athleteActivities)
	return (
		<Container>
			{data.length > 0 ? (
				<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					{data.map(({ title }) => (
						<Col key={title}>
							<Card className="h-100">
								<Card.Body>
									<Card.Title>{title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			) : (
				<div>No sessions found</div>
			)}
			<button onClick={() => copyStravaActivities(1714989984)}></button>
		</Container>
	)
}

export default connect(DataContainer)
