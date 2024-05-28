import { connect } from "react-redux"
import { State } from "../../../../../../redux/initialState"
import { copyStravaActivities } from "../../../../../../redux/actions/stravaActions"

const mapStateToProps = (state: State) => {
	return {
		athleteActivities: state.athleteActivities,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	copyStravaActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)
