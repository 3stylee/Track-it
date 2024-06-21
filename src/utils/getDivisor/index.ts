import { getCurrentMonthWeeks } from "../getWeeksOfMonth"

/**
 * Determines the divisor for calculating averages, depending on whether the data is weekly or monthly.
 *
 * @param {boolean} isWeek - A boolean indicating whether the data is weekly. If true, the data is weekly. If false, the data is monthly.
 *
 * @returns {number} The divisor for calculating averages. It is the current day of the week if the data is weekly, or the current week of the month if the data is monthly.
 */
export const getDivisor = (isWeek: boolean) => {
	if (isWeek) {
		const day = new Date().getDay()
		return day === 0 ? 7 : day
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
