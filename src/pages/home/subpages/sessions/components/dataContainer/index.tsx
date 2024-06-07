import React from "react"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Card, Col, Row } from "react-bootstrap"
import { Container, StyledLink } from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import { ROUTE_PATHS } from "../../../../../../constants/constants"

export interface DataContainerProps {
	sessionGroups: any[]
	sessions: any[]
	apiCallsInProgress: number
}

export const DataContainer = ({ sessionGroups, sessions, apiCallsInProgress }: DataContainerProps) => {
	const theme = useTheme()

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="90%" />
	return (
		<Container>
			{sessionGroups.length > 0 ? (
				<Row sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					{sessionGroups.map(([firstGroupId]) => {
						const firstGroupSession = sessions.find((session) => session.id === firstGroupId)
						return firstGroupSession ? (
							<Col key={firstGroupId}>
								<StyledLink to={ROUTE_PATHS.SESSIONS + `/${firstGroupId}`}>
									<Card
										className="h-100"
										text={theme.bootstrap.textColor}
										bg={theme.bootstrap.background}>
										<Card.Body>
											<Card.Title>{firstGroupSession.title}</Card.Title>
											{firstGroupSession.heartrate}
										</Card.Body>
									</Card>
								</StyledLink>
							</Col>
						) : null
					})}
				</Row>
			) : (
				<div>No sessions found</div>
			)}
		</Container>
	)
}

export default connect(DataContainer)
