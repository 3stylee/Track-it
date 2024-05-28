import { SESSION_TYPES } from "../../../../constants/constants"
import { AthleteActivities } from "../../subpages/activitiesList/models"

export const getSessions = (athleteActivities: AthleteActivities) => {
	return athleteActivities
		.filter((activity) => SESSION_TYPES.includes(activity.predictedType))
		.map((session) => ({
			title: session.title,
		}))
}
