import { useTheme } from "@emotion/react"
import React from "react"
import { Card, Row } from "react-bootstrap"
import connect from "./connect"
import { CenteredCol, StatsContainer, StyledCard, Title } from "./components"
import { CurrentActivity } from "../../models"
import { Units } from "../../../../../../models"
import { getActivityTitleStats } from "../../../../utils/getActivityTitleStats"
import { LabelledStat } from "../labelledStat"

interface ActivityTitleProps {
	currentActivity: CurrentActivity
	units: Units
}

export const ActivityTitle = ({ currentActivity, units }: ActivityTitleProps) => {
	const {
		bootstrap: { background, textColor },
	} = useTheme()
	const { distance, name, description } = currentActivity
	if (distance === undefined) return null
	const stats = getActivityTitleStats(currentActivity, units)
	return (
		<StyledCard bg={background} text={textColor} className="w-100">
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
