import { connect } from "react-redux"
import {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetPageNumber,
} from "../../../../redux/actions/athleteActivitiesActions"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	const apiCallsInProgress = state.apiCallsInProgress
	return {
		firstActivityDate: state.userData.firstActivityDate,
		loading: apiCallsInProgress > 0,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetPageNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)
