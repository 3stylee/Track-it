import { connect } from "react-redux"
import { State } from "../../../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		sessionGroups: state.sessionGroups,
		sessions: state.sessions,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

export default connect(mapStateToProps)
