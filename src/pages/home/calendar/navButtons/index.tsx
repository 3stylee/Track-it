import React from "react"
import { getMonth, getYear } from "date-fns"
import { ChevronNext, ChevronPrev, TodayButton } from "./components"
import connect from "./connect"
import { ChevronLeft, ChevronRight } from "react-feather"
import { adjustDateForTimezone } from "../../../../utils/adjustDateForTimezone"

interface NavButtonsProps {
	firstActivityDate: string
	selectedDate: Date
	resetSelectedDate: () => void
	updateSelectedDate: (newDate: Date) => void
}

const NavButtons = ({ selectedDate, firstActivityDate, resetSelectedDate, updateSelectedDate }: NavButtonsProps) => {
	const today = new Date()
	const currentMonth = getMonth(selectedDate)
	const currentYear = getYear(selectedDate)
	const onCurrentMonth = currentMonth === getMonth(today) && currentYear === getYear(today)
	const onLastMonth =
		currentMonth === getMonth(new Date(firstActivityDate)) && currentYear === getYear(new Date(firstActivityDate))

	const handlePrevMonth = () => {
		updateSelectedDate(adjustDateForTimezone(new Date(currentYear, currentMonth - 1, 1)))
	}

	const handleNextMonth = () => {
		updateSelectedDate(adjustDateForTimezone(new Date(currentYear, currentMonth + 1, 1)))
	}

	return (
		<div>
			<TodayButton onClick={resetSelectedDate} disabled={onCurrentMonth} className="mx-2">
				Today
			</TodayButton>
			<ChevronPrev as={ChevronLeft} onClick={() => !onLastMonth && handlePrevMonth()} disabled={onLastMonth} />
			<ChevronNext
				as={ChevronRight}
				onClick={() => !onCurrentMonth && handleNextMonth()}
				disabled={onCurrentMonth}
			/>
		</div>
	)
}

export default connect(NavButtons)
