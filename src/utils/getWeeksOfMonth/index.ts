import { endOfMonth, startOfMonth, startOfWeek } from "date-fns"

/**
 * Generates an array of objects, each representing a week in the current month.
 *
 * @returns {Object[]} An array of objects, each representing a week in the current month. Each object has start and end dates,
 */
export const getCurrentMonthWeeks = () => {
	const weeks = []

	const currentDate = new Date()
	const firstDate = startOfMonth(currentDate)
	const lastDayOfMonth = endOfMonth(currentDate)

	const firstMonday = startOfWeek(firstDate, { weekStartsOn: 1 })
	let currentWeekStart = new Date(firstMonday)

	while (currentWeekStart <= lastDayOfMonth) {
		const currentWeekEnd = new Date(currentWeekStart)
		currentWeekEnd.setDate(currentWeekStart.getDate() + 6)
		currentWeekEnd.setHours(23, 59, 59, 999)

		weeks.push({ start: new Date(currentWeekStart), end: new Date(currentWeekEnd) })

		currentWeekStart = new Date(currentWeekEnd)
		currentWeekStart.setDate(currentWeekStart.getDate() + 1)
		currentWeekStart.setHours(0, 0, 0, 0)
	}

	return weeks
}
