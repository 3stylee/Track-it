import { DASHBOARD_ERRORS } from "../../../../constants/constants"
import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	const dataError = Object.values(DASHBOARD_ERRORS).includes(state.apiError.message)
	return {
		athleteData: state.athleteData,
		units: state.units,
		dataError,
	}
}

export default connect(mapStateToProps)
