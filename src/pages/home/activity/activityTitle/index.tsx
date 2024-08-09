import React from "react"
import { Card, Row } from "react-bootstrap"
import connect from "./connect"
import { CenteredCol, StatsContainer, StyledCard, Title } from "./components"
import { getActivityTitleStats } from "../../../../utils/getActivityTitleStats"
import { LabelledStat } from "../labelledStat"
import { CurrentActivity } from "../../../../models/activities"
import { Units } from "../../../../models/state"
import { BadgeDropdown } from "../../../../globalComponents/badgeDropdown"
import { ACTIVITY_TYPES } from "../../../../constants/constants"

interface ActivityTitleProps {
	currentActivity: CurrentActivity
	units: Units
	updateTypeError: boolean
	updateActivityType: (id: number, prevType: string, newType: string, currentActivity?: boolean) => void
}

export const ActivityTitle = ({ currentActivity, units, updateTypeError, updateActivityType }: ActivityTitleProps) => {
	const { distance, name, description } = currentActivity
	if (distance === undefined) return null
	const stats = getActivityTitleStats(currentActivity, units)

	const handleSetType = (selected: string) => {
		updateActivityType(currentActivity.id, currentActivity.predictedType, selected, true)
	}

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
			<BadgeDropdown
				selected={currentActivity.predictedType}
				options={ACTIVITY_TYPES}
				setSelected={handleSetType}
				error={updateTypeError}
			/>
		</StyledCard>
	)
}

export default connect(ActivityTitle)
