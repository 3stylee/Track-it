import React, { useEffect } from "react"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Card, Col, Row } from "react-bootstrap"
import { Container } from "./components"
import connect from "./connect"

export interface DataContainerProps {
	sessions: any[]
	apiCallsInProgress: number
	loadSessions: () => void
}

export const DataContainer = ({ sessions, apiCallsInProgress, loadSessions }: DataContainerProps) => {
	useEffect(() => {
		if (sessions.length === 0) loadSessions()
	}, [sessions, loadSessions])

	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	return (
		<Container>
			{sessions.length > 0 ? (
				<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					{sessions.map(({ title, id }) => (
						<Col key={id}>
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
		</Container>
	)
}

export default connect(DataContainer)
