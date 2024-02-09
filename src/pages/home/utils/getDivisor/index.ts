import { getCurrentMonthWeeks } from "../getWeeksOfMonth"

export const getDivisor = (isWeek: boolean) => {
	if (isWeek) {
		return new Date().getDay()
	} else {
		const weeks = getCurrentMonthWeeks()
		const today = new Date()
		const index = weeks.findIndex((week) => {
			const startDate = new Date(week.start)
			const endDate = new Date(week.end)
			return startDate <= today && today <= endDate
		})
		return index + 1
	}
}
