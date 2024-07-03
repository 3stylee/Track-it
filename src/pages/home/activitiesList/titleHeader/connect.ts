import { connect } from "react-redux"
import { loadAthleteActivities } from "../../../../redux/actions/loadAthleteActivitiesActions"
import { resetPageNumber } from "../../../../redux/actions/loadMoreActions"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		firstActivityDate: state.userData.firstActivityDate,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	resetPageNumber,
}

export default connect(mapStateToProps, mapDispatchToProps)
