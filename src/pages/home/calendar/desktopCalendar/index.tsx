import React from "react"
import { DAYS_OF_WEEK } from "../../../../constants/constants"
import { DayHeader, DesktopCalendarContainer, EmptyCell, GridContainer } from "./components"
import { DayCell } from "../dayCell"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import { getDate } from "date-fns"
import { getCalendarGrid } from "../../../../utils/getCalendarGrid"

interface DesktopCalendarProps {
	selectedDate: Date
	athleteActivities: AthleteActivities | null
	loading: boolean
}

const DesktopCalendar = ({ selectedDate, loading, athleteActivities }: DesktopCalendarProps) => {
	const { startDayOfWeek, daysArray } = getCalendarGrid(selectedDate)

	return (
		<DesktopCalendarContainer>
			<GridContainer>
				{DAYS_OF_WEEK.map((dayName) => (
					<DayHeader key={dayName}>{dayName}</DayHeader>
				))}
				{Array.from({ length: startDayOfWeek }).map((_, i) => (
					<EmptyCell key={`empty-start-${i}`} />
				))}
				{daysArray.map((day) => {
					if (loading) {
						return <DayCell key={day} day={day} activities={[]} loading={loading} />
					}
					const activities = athleteActivities?.filter((activity) => {
						const date = getDate(new Date(activity.start))
						return date === day
					})
					return <DayCell key={day} day={day} activities={activities} />
				})}
			</GridContainer>
		</DesktopCalendarContainer>
	)
}

export default connect(DesktopCalendar)
