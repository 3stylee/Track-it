import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadActivityData } from "../../../../../../redux/actions/loadActivityDataActions"
import { loadAthleteData } from "../../../../../../redux/actions/loadAthleteDataActions"

const mapStateToProps = (state: State) => {
	return {
		dashboardSortMetric: state.dashboardSortMetric,
		activityData: state.activityData,
		athleteData: state.athleteData,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadActivityData,
	loadAthleteData,
}

export default connect(mapStateToProps, mapDispatchToProps)
