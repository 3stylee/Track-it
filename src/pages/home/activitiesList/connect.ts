import { State } from "../../../redux/initialState"
import { connect } from "react-redux"
import {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetListSize,
} from "../../../redux/actions/athleteActivitiesActions"

const mapStateToProps = (state: State) => {
	return {
		apiError: state.apiError,
		activityCount: state.athleteActivities?.length || 0,
		gotInitialActivities: state.gotInitialActivities,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetListSize,
}

export default connect(mapStateToProps, mapDispatchToProps)
