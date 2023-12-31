import { connect } from "react-redux"
import { State } from "../../../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		data: state.activityData,
		dataType: state.dataType,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

export default connect(mapStateToProps)
