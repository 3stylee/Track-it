import { CURRENT_ACTIVITY_ERRORS } from "../../../../constants/constants"
import { updateActivityType } from "../../../../redux/actions/athleteActivitiesActions"
import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const updateTypeError = state.apiError === CURRENT_ACTIVITY_ERRORS.UPDATE_ACTIVITY_ERROR
	return {
		currentActivity: state.currentActivity,
		units: state.units,
		updateTypeError,
	}
}

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(mapStateToProps, mapDispatchToProps)
