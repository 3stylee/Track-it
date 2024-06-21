import axios from "axios"
import { removeSpaces } from "../removeSpaces"
import { AthleteActivities } from "../../models/activities"

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
			"https://urchin-app-q9ue8.ondigitalocean.app/extract_entities",
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
