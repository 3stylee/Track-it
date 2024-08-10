import { connect } from "react-redux"
import { deleteAthleteActivity } from "../../../../redux/actions/athleteActivitiesActions"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		errorStatus: state.apiError.status,
	}
}

const mapDispatchToProps = {
	deleteAthleteActivity,
}

export default connect(mapStateToProps, mapDispatchToProps)
