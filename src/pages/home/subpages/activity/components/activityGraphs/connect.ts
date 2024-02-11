import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		currentActivityStream: state.currentActivityStream,
		currentActivity: state.currentActivity,
	}
}

export default connect(mapStateToProps)
