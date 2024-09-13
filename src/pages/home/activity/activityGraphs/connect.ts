import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const loading = state.apiCallsInProgress > 0
	return {
		currentActivityStream: state.currentActivityStream,
		currentActivity: state.currentActivity,
		units: state.units,
		loading,
	}
}

export default connect(mapStateToProps)
