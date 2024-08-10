import { DASHBOARD_ERRORS } from "../../../../constants/constants"
import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const dataError = state.apiError.message === DASHBOARD_ERRORS.ATHLETE_ACTIVITIES_ERROR
	return {
		athleteActivities: state.athleteActivities || [],
		units: state.units,
		dataError,
	}
}

export default connect(mapStateToProps)
