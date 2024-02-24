import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadAthleteActivities } from "../../../../../../redux/actions/loadAthleteActivitiesActions"

const mapStateToProps = (state: State) => {
	return {
		dataFlags: state.dataFlags,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)
