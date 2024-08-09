import React from "react"
import { Card, Row } from "react-bootstrap"
import connect from "./connect"
import { CenteredCol, StatsContainer, StyledCard, Title } from "./components"
import { getActivityTitleStats } from "../../../../utils/getActivityTitleStats"
import { LabelledStat } from "../labelledStat"
import { CurrentActivity } from "../../../../models/activities"
import { Units } from "../../../../models/state"

interface ActivityTitleProps {
	currentActivity: CurrentActivity
	units: Units
}

export const ActivityTitle = ({ currentActivity, units }: ActivityTitleProps) => {
	const { distance, name, description } = currentActivity
	if (distance === undefined) return null
	const stats = getActivityTitleStats(currentActivity, units)
	return (
		<StyledCard className="w-100">
			<Card.Body>
				<Title>
					<h2>{name}</h2>
					{}
					{description && <i>{`"${description}"`}</i>}
				</Title>

				<StatsContainer>
					<Row className="g-3">
						{stats.map(({ text, value, unit }) => (
							<CenteredCol key={text} xs={6} sm={6} md={4} lg={6} xl={4}>
								<LabelledStat text={text} value={value} unit={unit} />
							</CenteredCol>
						))}
					</Row>
				</StatsContainer>
			</Card.Body>
		</StyledCard>
	)
}

export default connect(ActivityTitle)
