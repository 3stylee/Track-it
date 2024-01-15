import { WEEK_OR_MONTH, INITIAL_DATA_MESSAGE } from "../../../../constants"
import { getDate } from "../getDate"

export const getActivityDataIfNeeded = (text: string, loadAthleteActivities: any) => {
	if (text === INITIAL_DATA_MESSAGE) {
		const startOfMonth = getDate(WEEK_OR_MONTH.MONTH)
		// we need data for up to 6 days before the month start for mileage graph
		startOfMonth.setDate(startOfMonth.getDate() - 6)
		loadAthleteActivities(null, startOfMonth.getTime() / 1000)
	}
}
