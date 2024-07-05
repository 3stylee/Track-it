import { useState } from "react"

const useMonthNavigation = () => {
	const today = new Date()
	const [currentYear, setCurrentYear] = useState(today.getFullYear())
	const [currentMonth, setCurrentMonth] = useState(today.getMonth())

	const handlePrevMonth = () => {
		if (currentMonth === 0) {
			setCurrentYear(currentYear - 1)
			setCurrentMonth(11)
		} else {
			setCurrentMonth(currentMonth - 1)
		}
	}

	const handleNextMonth = () => {
		if (currentMonth === 11) {
			setCurrentYear(currentYear + 1)
			setCurrentMonth(0)
		} else {
			setCurrentMonth(currentMonth + 1)
		}
	}

	const setToToday = () => {
		setCurrentYear(today.getFullYear())
		setCurrentMonth(today.getMonth())
	}

	return { currentYear, currentMonth, handlePrevMonth, handleNextMonth, setToToday }
}

export default useMonthNavigation
