import { State } from "../../../redux/initialState"
import { connect } from "react-redux"
import {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetListSize,
} from "../../../redux/actions/loadAthleteActivitiesActions"

const mapStateToProps = (state: State) => {
	return {
		apiError: state.apiError,
		gotInitialActivities: state.gotInitialActivities,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetListSize,
}

export default connect(mapStateToProps, mapDispatchToProps)
