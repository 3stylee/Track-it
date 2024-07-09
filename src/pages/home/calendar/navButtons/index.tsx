import React from "react"
import { getMonth, getYear } from "date-fns"
import { ChevronNext, ChevronPrev, TodayButton } from "./components"
import connect from "./connect"
import { ChevronLeft, ChevronRight } from "react-feather"

interface NavButtonsProps {
	currentMonth: number
	currentYear: number
	firstActivityDate: string
	handlePrevMonth: () => void
	handleNextMonth: () => void
	setToToday: () => void
}

const NavButtons = ({
	currentMonth,
	currentYear,
	firstActivityDate,
	handleNextMonth,
	handlePrevMonth,
	setToToday,
}: NavButtonsProps) => {
	const onCurrentMonth = currentMonth === getMonth(new Date()) && currentYear === getYear(new Date())
	const onLastMonth =
		currentMonth === getMonth(new Date(firstActivityDate)) && currentYear === getYear(new Date(firstActivityDate))
	return (
		<div>
			<TodayButton onClick={setToToday} disabled={onCurrentMonth} className="mx-2">
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
