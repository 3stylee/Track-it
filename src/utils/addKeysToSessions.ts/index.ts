import { Session } from "../../models/sessions"

type SessionGroups = {
	[category: string]: number[]
}

type UpdatedSession = Session & {
	groupKey: string
}

export const addKeysToSessions = (sessions: Session[], sessionGroups: SessionGroups): UpdatedSession[] => {
	// Create a reverse mapping from ID to groupKey
	const idToGroupKey = Object.entries(sessionGroups).reduce((acc, [groupKey, ids]) => {
		ids.forEach((id) => {
			acc[id] = groupKey
		})
		return acc
	}, {} as { [id: string]: string })

	// Function to add groupKey to activity
	const addGroupKey = (activity: Session): UpdatedSession => ({
		...activity,
		groupKey: idToGroupKey[activity.id],
	})

	// Use map to apply the function to each activity
	const updatedActivities = sessions.map(addGroupKey)

	return updatedActivities
}
