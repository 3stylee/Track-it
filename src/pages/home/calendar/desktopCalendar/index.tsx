import React from "react"
import { DAYS_OF_WEEK } from "../../../../constants/constants"
import { DayHeader, EmptyCell, GridContainer } from "./components"
import { DayCell } from "../dayCell"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"
import { getDate } from "date-fns"

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
	// Get the first and last day of the current month
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
	const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)

	// Calculate the number of days in the month
	const daysInMonth = lastDayOfMonth.getDate()

	// Determine the day of the week the month starts on
	const startDayOfWeek = firstDayOfMonth.getDay() - 1

	// Create an array of days in the month
	const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)

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
