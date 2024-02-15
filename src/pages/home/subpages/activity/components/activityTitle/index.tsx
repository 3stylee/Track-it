import { useTheme } from "@emotion/react"
import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import connect from "./connect"
import { StyledCard, Title } from "./components"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"

export const ActivityTitle = ({ currentActivity }: any) => {
	const theme = useTheme()
	if (currentActivity.distance === undefined) return null
	return (
		<StyledCard bg={theme.bootstrap.background} text={theme.bootstrap.textColor} className="w-100">
			<Card.Body>
				<Title>{currentActivity.name}</Title>
				<Row>
					<Col xs={6} md={4}>
						{convertToKm(currentActivity.distance)}
					</Col>
					<Col xs={6} md={4}>
						{getMinsFromSeconds(currentActivity.moving_time)}
					</Col>
					<Col xs={6} md={4}>
						{getMinsFromSeconds(currentActivity.elapsed_time)}
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						{getMinsFromSeconds(1000 / currentActivity.average_speed)}
					</Col>
					<Col xs={6} md={4}>
						{currentActivity.average_heartrate.toFixed(0)}
					</Col>
					<Col xs={6} md={4}>
						placeholder
					</Col>
				</Row>
			</Card.Body>
		</StyledCard>
	)
}

export default connect(ActivityTitle)
