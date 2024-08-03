import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		apiCallsInProgress: state.apiCallsInProgress,
		athleteActivities: state.athleteActivities,
	}
}

export default connect(mapStateToProps)
