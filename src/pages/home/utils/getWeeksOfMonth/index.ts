export const getCurrentMonthWeeks = () => {
	const weeks = []

	const currentDate = new Date()
	const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
	const lastDayOfMonth = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0)

	const dayOfWeek = firstDate.getDay()
	const daysUntilMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1
	firstDate.setDate(firstDate.getDate() - daysUntilMonday)

	let currentWeekStart = new Date(firstDate)

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
