import { SORT_OPTIONS } from "../../../../constants/constants"

/**
 * Gets the date for the start of the current week or month, depending on the provided option.
 *
 * @param {string} weekOrMonth - The option to determine whether to get the date for the start of the week or the month. It should be one of the SORT_OPTIONS constants.
 *
 * @returns {Date} The date for the start of the week or month.
 */
export const getDate = (weekOrMonth: string) => {
	const now = new Date()

	if (weekOrMonth === SORT_OPTIONS.WEEK) {
		const currentDayOfWeek = now.getDay()
		const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1
		now.setDate(now.getDate() - daysUntilMonday)
	}
	if (weekOrMonth === SORT_OPTIONS.MONTH) {
		now.setDate(1)
	}

	now.setHours(0, 0, 0, 0)

	return now
}
