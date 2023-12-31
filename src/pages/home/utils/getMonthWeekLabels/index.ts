export const getMonthWeekLabels = (monthWeeks: any) => {
	const weekLabels: string[] = []
	monthWeeks.forEach((week: any) => {
		weekLabels.push(`${week.start.getDate()} - ${week.end.getDate()}`)
	})

	return weekLabels
}
