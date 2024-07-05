import { connect } from "react-redux"
import { State } from "../../../redux/initialState"
import { loadAthleteActivities } from "../../../redux/actions/loadAthleteActivitiesActions"
import { resetPageNumber } from "../../../redux/actions/loadMoreActions"

export const mapStateToProps = (state: State) => {
	return {
		apiError: state.apiError,
		athleteActivities: state.athleteActivities,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	resetPageNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)
