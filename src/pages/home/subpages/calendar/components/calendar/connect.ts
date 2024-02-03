import { loadAthleteActivities } from "../../../../../../redux/actions/loadAthleteActivitiesActions"
import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		athleteActivities: state.athleteActivities,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)
