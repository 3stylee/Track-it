import { connect } from "react-redux"
import { State } from "../../../redux/initialState"
import { loadSessionGroups, loadSessions } from "../../../redux/actions/sessionsActions"

const mapStateToProps = (state: State) => {
	return {
		sessionsLength: state.sessions.length,
		sessionGroupsLength: state.sessionGroups.length,
	}
}

const mapDispatchToProps = {
	loadSessions,
	loadSessionGroups,
}

export default connect(mapStateToProps, mapDispatchToProps)
