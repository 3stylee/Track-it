import { State } from "../../../redux/initialState"
import { connect } from "react-redux"
import { loadAthleteData } from "../../../redux/actions/loadAthleteDataActions"
import { getDate } from "../../../utils/getDate"
import { SORT_OPTIONS } from "../../../constants/constants"
import { loadInitialAthleteActivities } from "../../../redux/actions/loadAthleteActivitiesActions"

const mapStateToProps = (state: State) => {
	const athleteActivities = state.athleteActivities || []
	const finalActivityDate = athleteActivities[athleteActivities.length - 1]?.start || Infinity
	const firstActivityDate = athleteActivities[0]?.start || 0
	const startOfMonth = getDate(SORT_OPTIONS.MONTH)
	const activitiesStartDate = new Date(startOfMonth.getDate() - 6).toISOString()
	const gotSufficientActivities =
		finalActivityDate <= startOfMonth.toISOString() &&
		firstActivityDate >= activitiesStartDate &&
		!state.activitiesHasFilter
	const gotAthleteData = Object.keys(state.athleteData).length !== 0
	const athleteId = state.athleteActivities ? state.athleteActivities[0].athlete.id : 0

	return {
		gotSufficientActivities,
		gotAthleteData,
		athleteId,
		apiCallsInProgress: state.apiCallsInProgress,
		apiError: state.apiError,
	}
}

const mapDispatchToProps = {
	loadInitialAthleteActivities,
	loadAthleteData,
}

export default connect(mapStateToProps, mapDispatchToProps)
