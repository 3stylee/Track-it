import React from "react"
import { DAYS_OF_WEEK } from "../../../../constants/constants"
import { DayHeader, EmptyCell, GridContainer } from "./components"
import { DayCell } from "../dayCell"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { getDate } from "date-fns"
import { getCalendarGrid } from "../../../../utils/getCalendarGrid"

interface DesktopCalendarProps {
	currentMonth: number
	currentYear: number
	apiCallsInProgress: number
	athleteActivities: AthleteActivities | null
}

const DesktopCalendar = ({
	currentMonth,
	currentYear,
	apiCallsInProgress,
	athleteActivities,
}: DesktopCalendarProps) => {
	const { startDayOfWeek, daysArray } = getCalendarGrid(currentMonth, currentYear)

	if (apiCallsInProgress > 0) return <AnimatedSpinner />
	return (
		<GridContainer>
			{DAYS_OF_WEEK.map((dayName) => (
				<DayHeader key={dayName}>{dayName}</DayHeader>
			))}
			{Array.from({ length: startDayOfWeek }).map((_, i) => (
				<EmptyCell key={`empty-start-${i}`} />
			))}
			{daysArray.map((day) => {
				const activities = athleteActivities?.filter((activity) => {
					const date = getDate(new Date(activity.start))
					return date === day
				})
				return <DayCell key={day} day={day} activities={activities} />
			})}
		</GridContainer>
	)
}

export default connect(DesktopCalendar)
