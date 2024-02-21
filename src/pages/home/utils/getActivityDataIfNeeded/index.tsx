import { SORT_OPTIONS } from "../../../../constants"
import { getDate } from "../getDate"

export const getActivityDataIfNeeded = (data: any[], loadAthleteActivities: any) => {
	if (data.length === 0) {
		const startOfMonth = getDate(SORT_OPTIONS.MONTH)
		// we need data for up to 6 days before the month start for mileage graph
		startOfMonth.setDate(startOfMonth.getDate() - 6)
		loadAthleteActivities(null, startOfMonth.getTime() / 1000)
	}
}
