import { startOfMonth, startOfWeek } from "date-fns"
import { SORT_OPTIONS } from "../../constants/constants"

/**
 * Gets the date for the start of the current week or month, depending on the provided option.
 *
 * @param {string} weekOrMonth - The option to determine whether to get the date for the start of the week or the month. It should be one of the SORT_OPTIONS constants.
 *
 * @returns {Date} The date for the start of the week or month.
 */
export const getDate = (weekOrMonth: string) => {
	let now = new Date()
	if (weekOrMonth === SORT_OPTIONS.WEEK) {
		now = startOfWeek(now, { weekStartsOn: 1 }) // Assumes week starts on Monday
	}
	if (weekOrMonth === SORT_OPTIONS.MONTH) {
		now = startOfMonth(now)
		const timezoneOffset = now.getTimezoneOffset() * 60000
		now = new Date(now.getTime() - timezoneOffset)
	}
	return now
}
