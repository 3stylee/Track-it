import { updateActivityType } from "../../../../redux/actions/athleteActivitiesActions"
import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const loading = state.apiCallsInProgress > 0
	return {
		currentActivity: state.currentActivity,
		units: state.units,
		loading,
	}
}

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(mapStateToProps, mapDispatchToProps)
