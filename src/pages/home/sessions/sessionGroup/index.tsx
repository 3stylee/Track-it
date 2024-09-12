import React from "react"
import { useParams } from "react-router-dom"
import connect from "./connect"
import { CountText, NoGroupText } from "./components"
import { DataContainer } from "../../activitiesList/dataContainer"
import { Sessions } from "../../../../models/sessions"

export interface SessionGroupProps {
	sessions: Sessions
	loading: boolean
}

const SessionGroup = ({ sessions, loading }: SessionGroupProps) => {
	const { id } = useParams<{ id: string }>()
	const key = sessions.find(({ id: sessionId }) => sessionId === parseInt(id || "", 10))?.groupKey
	const groupSessions = sessions.filter(({ groupKey }) => groupKey === key)
	return (
		<div>
			{!loading && (
				<CountText>Looks like you've completed this session or similar {groupSessions.length} times:</CountText>
			)}
			<DataContainer
				loading={loading}
				nextPage={() => {}}
				hasMore={false}
				loadingMore={false}
				athleteActivities={groupSessions}
				loadAthleteActivities={() => {}}
				shouldTrimData={false}
				beginLoadMoreApiCall={() => {}}
				noPadding
				noBadges
				initialLoadError={false}
				loadMoreError={false}
				filterApplied={false}
			/>
			{!loading && groupSessions.length === 0 && <NoGroupText>No group found</NoGroupText>}
		</div>
	)
}

export default connect(SessionGroup)
