import { AthleteActivities } from "../../subpages/activitiesList/models"

export const trimData = (data: AthleteActivities) => {
	if (!data) return []
	// largest multiple of 12 less than or equal to size as we might get
	// an odd number when we do initial load on dashboard
	const size = data.length
	const limit = size - (size % 12)
	return data.slice(0, limit)
}
