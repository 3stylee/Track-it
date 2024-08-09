import { State } from "../../../redux/initialState"
import { connect } from "react-redux"
import { loadAthleteData } from "../../../redux/actions/loadAthleteDataActions"
import { loadInitialAthleteActivities } from "../../../redux/actions/athleteActivitiesActions"

const mapStateToProps = (state: State) => {
	const gotAthleteData = Object.keys(state.athleteData).length !== 0

	return {
		gotSufficientActivities: state.gotInitialActivities,
		gotAthleteData,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadInitialAthleteActivities,
	loadAthleteData,
}

export default connect(mapStateToProps, mapDispatchToProps)
