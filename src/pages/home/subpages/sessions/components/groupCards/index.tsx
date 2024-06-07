import React from "react"
import { AnimatedSpinner } from "../../../../../../globalComponents/animatedSpinner"
import { Card, Col, Row } from "react-bootstrap"
import { Container, PageTitle, StyledLink, StyledTitle } from "./components"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import { ROUTE_PATHS } from "../../../../../../constants/constants"
import { AthleteActivities } from "../../../activitiesList/models"

export interface GroupCardsProps {
	sessionGroups: any[]
	sessions: AthleteActivities
	apiCallsInProgress: number
}

export const GroupCards = ({ sessionGroups, sessions, apiCallsInProgress }: GroupCardsProps) => {
	const theme = useTheme()

	if (apiCallsInProgress > 0) return <AnimatedSpinner height="90%" />
	return (
		<Container>
			<PageTitle>Your Sessions</PageTitle>
			{sessionGroups.length > 0 ? (
				<Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-3 g-md-4">
					{sessionGroups.map((group) => {
						const firstGroupId = group[0]
						const firstGroupSession = sessions.find((session) => session.id === firstGroupId)
						const link =
							group.length > 1
								? ROUTE_PATHS.SESSIONS + `/${firstGroupId}`
								: ROUTE_PATHS.ACTIVITY + `?id=${firstGroupId}`
						return firstGroupSession ? (
							<Col key={firstGroupId}>
								<StyledLink to={link}>
									<Card
										className="h-100"
										text={theme.bootstrap.textColor}
										bg={theme.bootstrap.background}>
										<Card.Body>
											<StyledTitle>{firstGroupSession.title}</StyledTitle>
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

export default connect(GroupCards)
