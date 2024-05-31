import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import {
	loadAthleteActivities,
	loadInitialAthleteActivities,
} from "../../../../../../redux/actions/loadAthleteActivitiesActions"
import { INITIAL_PAGE_SIZE } from "../../../../../../constants/constants"

const mapStateToProps = (state: State) => {
	const athleteActivitiesLength = state.athleteActivities ? state.athleteActivities.length : 0
	return {
		apiError: state.apiError,
		gotInitialActivities: athleteActivitiesLength >= INITIAL_PAGE_SIZE,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	loadInitialAthleteActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)
