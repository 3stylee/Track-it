import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadActivityStream } from "../../../../../../redux/actions/loadActivityStreamActions"
import { loadCurrentActivity } from "../../../../../../redux/actions/loadCurrentActivity"

const mapStateToProps = (state: State) => {
	return {
		apiCallsInProgress: state.apiCallsInProgress,
		currentActivity: state.currentActivity,
	}
}

const mapDispatchToProps = {
	loadActivityStream,
	loadCurrentActivity,
}

export default connect(mapStateToProps, mapDispatchToProps)
