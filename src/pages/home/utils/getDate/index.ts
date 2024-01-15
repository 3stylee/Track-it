import { WEEK_OR_MONTH } from "../../../../constants"

export const getDate = (weekOrMonth: string) => {
	const now = new Date()

	if (weekOrMonth === WEEK_OR_MONTH.WEEK) {
		const currentDayOfWeek = now.getDay()
		const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1
		now.setDate(now.getDate() - daysUntilMonday)
	}
	if (weekOrMonth === WEEK_OR_MONTH.MONTH) {
		now.setDate(1)
	}

	now.setHours(0, 0, 0, 0)

	return now
}
