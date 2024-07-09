export const getCalendarGrid = (currentMonth: number, currentYear: number) => {
	// Get the first and last day of the current month
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
	const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)

	// Calculate the number of days in the month
	const daysInMonth = lastDayOfMonth.getDate()
	// Determine the day of the week the month starts on
	const startDayOfWeek = firstDayOfMonth.getDay() - 1
	// Create an array of days in the month
	const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)

	return { startDayOfWeek, daysArray }
}
