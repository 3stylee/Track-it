import React from "react"
import { useParams } from "react-router-dom"
import connect from "./connect"
import { CountText, NoGroupText } from "./components"
import { DataContainer } from "../../activitiesList/dataContainer"
import { Sessions } from "../../../../models/sessions"

export interface SessionGroupProps {
	sessions: Sessions
	apiCallsInProgress: number
}

const SessionGroup = ({ sessions, apiCallsInProgress }: SessionGroupProps) => {
	const { id } = useParams<{ id: string }>()
	const key = sessions.find(({ id: sessionId }) => sessionId === parseInt(id || "", 10))?.groupKey
	const groupSessions = sessions.filter(({ groupKey }) => groupKey === key)
	return (
		<div>
			{apiCallsInProgress === 0 && (
				<CountText>Looks like you've completed this session or similar {groupSessions.length} times:</CountText>
			)}
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
			{apiCallsInProgress === 0 && <NoGroupText>No group found</NoGroupText>}
		</div>
	)
}

export default connect(SessionGroup)
