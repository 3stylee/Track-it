import { State } from "../../../redux/initialState"
import { connect } from "react-redux"
import { loadActivityStream } from "../../../redux/actions/loadActivityStreamActions"
import { loadCurrentActivity } from "../../../redux/actions/currentActivityActions"

const mapStateToProps = (state: State) => {
	return {
		apiCallsInProgress: state.apiCallsInProgress,
		currentActivity: state.currentActivity,
		apiError: state.apiError,
	}
}

const mapDispatchToProps = {
	loadActivityStream,
	loadCurrentActivity,
}

export default connect(mapStateToProps, mapDispatchToProps)
