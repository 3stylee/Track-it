import { State } from "../../../redux/initialState"
import { connect } from "react-redux"
import { loadAthleteData } from "../../../redux/actions/loadAthleteDataActions"
import { loadInitialAthleteActivities } from "../../../redux/actions/loadAthleteActivitiesActions"

const mapStateToProps = (state: State) => {
	const gotAthleteData = Object.keys(state.athleteData).length !== 0
	const athleteId = state.athleteActivities ? state.athleteActivities[0].athlete.id : 0

	return {
		gotSufficientActivities: state.gotInitialActivities,
		gotAthleteData,
		athleteId,
		apiCallsInProgress: state.apiCallsInProgress,
		apiError: state.apiError,
	}
}

const mapDispatchToProps = {
	loadInitialAthleteActivities,
	loadAthleteData,
}

export default connect(mapStateToProps, mapDispatchToProps)
