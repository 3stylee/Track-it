import { connect } from "react-redux"
import { State } from "../../../redux/initialState"
import { loadSessions } from "../../../redux/actions/sessionsActions"

const mapStateToProps = (state: State) => {
	return {
		sessionsLength: state.sessions.length,
	}
}

const mapDispatchToProps = {
	loadSessions,
}

export default connect(mapStateToProps, mapDispatchToProps)
