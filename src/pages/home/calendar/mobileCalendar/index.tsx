import React, { useState } from "react"
import { DayCell, DayHeader, GridContainer, SelectedCircle } from "./components"
import { getCalendarGrid } from "../../../../utils/getCalendarGrid"
import { DAYS_OF_WEEK_SHORT } from "../../../../constants/constants"
import DayDrawer from "../dayDrawer"

interface MobileCalendarProps {
	currentYear: number
	currentMonth: number
}

export const MobileCalendar = ({ currentMonth, currentYear }: MobileCalendarProps) => {
	const today = new Date()
	const [selectedDate, setSelectedDate] = useState(today)

	const { startDayOfWeek, daysArray } = getCalendarGrid(currentMonth, currentYear)
	return (
		<>
			<GridContainer>
				{DAYS_OF_WEEK_SHORT.map((dayName, index) => (
					<DayHeader key={dayName + index}>{dayName}</DayHeader>
				))}
				{Array.from({ length: startDayOfWeek }).map((_, i) => (
					<div key={`empty-start-${i}`} />
				))}
				{daysArray.map((day) => {
					const date = new Date(currentYear, currentMonth, day)
					const disabled = date > today
					const active = selectedDate.toDateString() === date.toDateString()
					return (
						<DayCell
							key={day}
							onClick={() => {
								!disabled && setSelectedDate(date)
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
		</>
	)
}
