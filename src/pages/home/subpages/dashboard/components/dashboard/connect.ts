import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadAthleteActivities } from "../../../../../../redux/actions/loadAthleteActivitiesActions"
import { loadAthleteData } from "../../../../../../redux/actions/loadAthleteDataActions"

const mapStateToProps = (state: State) => {
	return {
		athleteActivities: state.athleteActivities,
		athleteData: state.athleteData,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	loadAthleteData,
}

export default connect(mapStateToProps, mapDispatchToProps)
