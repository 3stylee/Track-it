import { updateActivityType } from "../../../../redux/actions/athleteActivitiesActions"
import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		currentActivity: state.currentActivity,
		units: state.units,
	}
}

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(mapStateToProps, mapDispatchToProps)
