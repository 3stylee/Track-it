import { getMonth, getYear } from "date-fns"

export const getCalendarGrid = (selectedDate: Date) => {
	// Get the first and last day of the current month
	const firstDayOfMonth = new Date(getYear(selectedDate), getMonth(selectedDate), 1)
	const lastDayOfMonth = new Date(getYear(selectedDate), getMonth(selectedDate) + 1, 0)

	// Calculate the number of days in the month
	const daysInMonth = lastDayOfMonth.getDate()
	// Determine the day of the week the month starts on
	const startDayOfWeek = (firstDayOfMonth.getDay() - 1 + 7) % 7
	// Create an array of days in the month
	const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)

	return { startDayOfWeek, daysArray }
}
