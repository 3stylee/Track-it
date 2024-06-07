import axios from "axios"
import { removeSpaces } from "../removeSpaces"
import { AthleteActivities } from "../../../pages/home/subpages/activitiesList/models"

export const extractEntities = async (fullSessions: AthleteActivities) => {
	const sessions = []
	for (const session of fullSessions) {
		sessions.push({
			id: session.id,
			title: removeSpaces(session.title),
		})
	}
	try {
		const response = await axios.post(
			"http://localhost:3009/extract_entities",
			{ sessions },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
		return []
	}
}
