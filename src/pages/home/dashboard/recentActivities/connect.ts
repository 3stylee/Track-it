import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const loading = state.apiCallsInProgress > 0
	return {
		athleteActivities: state.athleteActivities,
		units: state.units,
		loading,
	}
}

export default connect(mapStateToProps)
