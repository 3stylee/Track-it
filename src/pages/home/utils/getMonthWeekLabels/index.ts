/**
 * Generates an array of labels for the weeks in a month.
 *
 * @param {Object[]} monthWeeks - An array of objects, each representing a week in a month where any week with a date inside the month counts.
 *
 * @returns {string[]} An array of strings, each representing a week in the month. Each string is in the format "start - end", where start is the day of the month of the start date and end is the day of the month of the end date.
 */
export const getMonthWeekLabels = (monthWeeks: any) => {
	const weekLabels: string[] = []
	monthWeeks.forEach((week: any) => {
		weekLabels.push(`${week.start.getDate()} - ${week.end.getDate()}`)
	})

	return weekLabels
}
