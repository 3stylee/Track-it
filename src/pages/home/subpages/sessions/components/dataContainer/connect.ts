import { connect } from "react-redux"
import { State } from "../../../../../../redux/initialState"
import { loadSessions } from "../../../../../../redux/actions/loadSessionsActions"

const mapStateToProps = (state: State) => {
	return {
		sessions: state.sessions,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadSessions,
}

export default connect(mapStateToProps, mapDispatchToProps)
