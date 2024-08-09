import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { updateActivityType } from "../../../../redux/actions/athleteActivitiesActions"
import { ACTIVITIES_LIST_ERRORS } from "../../../../constants/constants"

const mapStateToProps = (state: State) => {
	const updateTypeError = state.apiError === ACTIVITIES_LIST_ERRORS.UPDATE_ACTIVITY_ERROR
	return {
		units: state.units,
		updateTypeError,
	}
}

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(mapStateToProps, mapDispatchToProps)
