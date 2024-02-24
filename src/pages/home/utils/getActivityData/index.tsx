import { SORT_OPTIONS } from "../../../../constants"
import { getDate } from "../getDate"

export const getActivityData = (
	loadAthleteActivities: (
		dateBefore?: number | undefined,
		dateAfter?: number | undefined,
		hasFilter?: boolean
	) => void
) => {
	const startOfMonth = getDate(SORT_OPTIONS.MONTH)
	// we need data for up to 6 days before the month start for mileage graph
	startOfMonth.setDate(startOfMonth.getDate() - 6)
	loadAthleteActivities(undefined, startOfMonth.getTime() / 1000)
}
