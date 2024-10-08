import { createSelector } from "reselect"
import { State } from "../../../../redux/initialState"
import { Session } from "../../../../models/sessions"
import { connect } from "react-redux"
import { SESSIONS_ERRORS } from "../../../../constants/constants"

// Selector to get sessions from state
const getSessions = (state: State) => state.sessions

// Memoized selector to group sessions by groupKey
const getGroupedSessions = createSelector([getSessions], (sessions) => {
	//@ts-ignore
	const groupedByGroupKey = sessions.reduce((acc: { [key: string]: number[] }, obj: Session) => {
		const { id, groupKey } = obj
		if (!acc[groupKey]) {
			acc[groupKey] = []
		}
		acc[groupKey].push(id)
		return acc
	}, {})
	return Object.values(groupedByGroupKey) as number[][]
})

const mapStateToProps = (state: State) => {
	const dataError = state.apiError.message === SESSIONS_ERRORS.SESSIONS_ERROR
	return {
		sessionGroups: getGroupedSessions(state),
		apiCallsInProgress: state.apiCallsInProgress,
		dataError,
		errorMessage: state.apiError.message,
	}
}

export default connect(mapStateToProps)
