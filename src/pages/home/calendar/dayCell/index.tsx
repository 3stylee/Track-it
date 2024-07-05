import React from "react"
import { StyledContainer } from "./components"
import { AthleteActivities } from "../../../../models/activities"
import Event from "../event"

interface DayCellProps {
	day: number
	activities: AthleteActivities | undefined
}

export const DayCell = ({ day, activities }: DayCellProps) => {
	if (!activities) return null
	return (
		<StyledContainer>
			{day}
			{activities?.map((activity) => (
				<Event key={activity.id} activity={activity} />
			))}
		</StyledContainer>
	)
}
