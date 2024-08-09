import { DASHBOARD_ERRORS } from "../../../../constants/constants"
import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const dataError = state.apiError === DASHBOARD_ERRORS.ATHLETE_DATA_ERROR
	return {
		athleteData: state.athleteData,
		units: state.units,
		dataError,
	}
}

export default connect(mapStateToProps)
