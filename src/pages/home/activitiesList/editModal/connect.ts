import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { editAthleteActivity } from "../../../../redux/actions/athleteActivitiesActions"

const mapStateToProps = (state: State) => {
	return {
		accessToken: state.userData.access_token,
	}
}

const mapDispatchToProps = {
	editAthleteActivity,
}

export default connect(mapStateToProps, mapDispatchToProps)
