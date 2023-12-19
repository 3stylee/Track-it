import { DASHBOARD_SORT_OPTIONS } from "../../../../constants"

export const getDate = (weekOrMonth: string) => {
	const now = new Date()

	if (weekOrMonth === DASHBOARD_SORT_OPTIONS.WEEK) {
		const currentDayOfWeek = now.getDay()
		const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1
		now.setDate(now.getDate() - daysUntilMonday)
	}
	if (weekOrMonth === DASHBOARD_SORT_OPTIONS.MONTH) {
		now.setDate(1)
	}

	now.setHours(0, 0, 0, 0)

	return now
}
