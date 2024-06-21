import { connect } from "react-redux"
import { State } from "../../../redux/initialState"
import { loadSessionGroups, loadSessions } from "../../../redux/actions/loadSessionsActions"

const mapStateToProps = (state: State) => {
	return {
		sessions: state.sessions,
		sessionGroups: state.sessionGroups,
	}
}

const mapDispatchToProps = {
	loadSessions,
	loadSessionGroups,
}

export default connect(mapStateToProps, mapDispatchToProps)
