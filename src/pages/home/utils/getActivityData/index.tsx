import { SORT_OPTIONS } from "../../../../constants/constants"
import { getDate } from "../getDate"

/**
 * Fetches athlete activities data starting from six days before the start of the current month.
 *
 * @param {Function} loadAthleteActivities - A redux action to load athlete activities.
 */
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
