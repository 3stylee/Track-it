import React from "react"
import { useParams } from "react-router-dom"
import connect from "./connect"
import { CountText } from "./components"
import { DataContainer } from "../../activitiesList/dataContainer"
import { AthleteActivities } from "../../../../models/activities"

export interface SessionGroupProps {
	sessionGroups: number[][]
	sessions: AthleteActivities
	apiCallsInProgress: number
}

const SessionGroup = ({ sessionGroups, sessions, apiCallsInProgress }: SessionGroupProps) => {
	const { id } = useParams<{ id: string }>()
	const sessionGroup = sessionGroups.find(([firstGroupElement]) => firstGroupElement.toString() === id)
	const groupSessions = sessions.filter(({ id }) => sessionGroup?.includes(id))
	return (
		<div>
			{sessionGroup ? (
				<>
					<CountText>
						Looks like you've completed this session or similar {groupSessions.length} times:
					</CountText>
					<DataContainer
						apiCallsInProgress={apiCallsInProgress}
						nextPage={() => {}}
						hasMore={false}
						loadingMore={false}
						athleteActivities={groupSessions}
						loadAthleteActivities={() => {}}
						shouldTrimData={false}
						beginLoadMoreApiCall={() => {}}
						noPadding
						noBadges
					/>
				</>
			) : (
				<div>No group found</div>
			)}
		</div>
	)
}

export default connect(SessionGroup)
