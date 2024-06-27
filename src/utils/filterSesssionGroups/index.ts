import { AthleteActivities } from "../../models/activities"

export const filterSessionGroups = (
	sessionGroups: number[][],
	sessions: AthleteActivities,
	searchText: string,
	sortOption: number
) => {
	const filteredSessions =
		searchText !== ""
			? sessionGroups.filter((group) =>
					sessions
						.find((session) => session.id === group[0])
						?.title.toLowerCase()
						.includes(searchText.toLowerCase())
			  )
			: sessionGroups
	const sortedGroups = filteredSessions
	return sortedGroups
		.map((group) => ({
			group,
			date: sessions.find((session) => session.id === group[0])?.start,
			size: group.length,
		}))
		.sort((a, b) => {
			switch (sortOption) {
				case 0: // Date descending
					return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
				case 1: // Date ascending
					return new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime()
				case 2: // Group size descending
					return b.size - a.size
				case 3: // Group size ascending
					return a.size - b.size
				default:
					return 0
			}
		})
		.map((sortedGroup) => sortedGroup.group)
}
