import React from "react"
import { DayCell, DayHeader, GridContainer, PageContainer, SelectedCircle } from "./components"
import { getCalendarGrid } from "../../../../utils/getCalendarGrid"
import { DAYS_OF_WEEK_SHORT } from "../../../../constants/constants"
import DayDrawer from "../dayDrawer"
import connect from "./connect"
import { getMonth, getYear } from "date-fns"

interface MobileCalendarProps {
	selectedDate: Date
	updateSelectedDate: (newDate: Date) => void
}

const MobileCalendar = ({ selectedDate, updateSelectedDate }: MobileCalendarProps) => {
	const today = new Date()
	const { startDayOfWeek, daysArray } = getCalendarGrid(selectedDate)
	return (
		<PageContainer>
			<GridContainer>
				{DAYS_OF_WEEK_SHORT.map((dayName, index) => (
					<DayHeader key={dayName + index}>{dayName}</DayHeader>
				))}
				{Array.from({ length: startDayOfWeek }).map((_, i) => (
					<div key={`empty-start-${i}`} />
				))}
				{daysArray.map((day) => {
					const date = new Date(getYear(selectedDate), getMonth(selectedDate), day)
					const disabled = date > today
					const active = selectedDate.toDateString() === date.toDateString()
					return (
						<DayCell
							key={day}
							onClick={() => {
								!disabled && updateSelectedDate(date)
							}}
							active={active}
							disabled={disabled}>
							{day}
							{active && <SelectedCircle layoutId="selectedCircle" />}
						</DayCell>
					)
				})}
			</GridContainer>
			<DayDrawer selectedDate={selectedDate} />
		</PageContainer>
	)
}

export default connect(MobileCalendar)
