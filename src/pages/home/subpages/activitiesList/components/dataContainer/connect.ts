import { connect } from "react-redux"
import { State } from "../../../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		data: state.athleteActivities,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

export default connect(mapStateToProps)
