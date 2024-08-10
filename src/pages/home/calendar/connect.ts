import { connect } from "react-redux"
import { State } from "../../../redux/initialState"
import { loadAthleteActivities, resetPageNumber } from "../../../redux/actions/athleteActivitiesActions"

export const mapStateToProps = (state: State) => {
	return {
		apiError: state.apiError.message,
		athleteActivities: state.athleteActivities,
		selectedDate: state.selectedDate,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	resetPageNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)
