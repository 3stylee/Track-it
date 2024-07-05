import { DateRange } from "react-day-picker"

/**
 * Converts a daterange object used by a datepicker to Unix timestamps that can be used by the Strava API.
 * If the date range is undefined or either date is missing, it returns undefined for both before and after.
 *
 * @param {DateRange | undefined} dateRange - The date range to convert. It should have a from and to date.
 *
 * @returns {Object} An object with before and after properties. Both are Unix timestamps or undefined.
 */
export const getBeforeAndAfterDates = (dateRange: DateRange | undefined) => {
	if (!(dateRange?.from && dateRange?.to)) return { before: undefined, after: undefined }
	const after = dateRange.from.getTime() / 1000
	dateRange.to.setHours(23, 59, 59, 0)
	const before = dateRange.to.getTime() / 1000
	return { before, after }
}

export const getBeforeAndAfterForCalendar = (currentMonth: number, currentYear: number) => {
	const after = new Date(currentYear, currentMonth, 1).getTime() / 1000
	const before = new Date(currentYear, currentMonth + 1, 1).getTime() / 1000
	return { before, after }
}
