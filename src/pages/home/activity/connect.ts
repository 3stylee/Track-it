import { loadActivityDetails } from "../../../redux/actions/currentActivityActions"
import { State } from "../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		apiCallsInProgress: state.apiCallsInProgress,
		currentActivity: state.currentActivity,
		apiError: state.apiError.message,
	}
}

const mapDispatchToProps = {
	loadActivityDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)
