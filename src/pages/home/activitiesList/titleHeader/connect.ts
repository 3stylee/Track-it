import { connect } from "react-redux"
import {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetPageNumber,
} from "../../../../redux/actions/athleteActivitiesActions"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		firstActivityDate: state.userData.firstActivityDate,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	loadInitialAthleteActivities,
	resetPageNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)
