import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadAthleteActivities } from "../../../../../../redux/actions/loadAthleteActivitiesActions"
import { PAGE_SIZE } from "../../../../../../constants/constants"

const mapStateToProps = (state: State) => {
	const athleteActivitiesLength = state.athleteActivities ? state.athleteActivities.length : 0
	return {
		apiError: state.apiError,
		gotInitialActivities: athleteActivitiesLength >= PAGE_SIZE,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)
