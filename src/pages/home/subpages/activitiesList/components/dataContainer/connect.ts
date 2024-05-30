import { connect } from "react-redux"
import { State } from "../../../../../../redux/initialState"
import { loadMoreAthleteActivities } from "../../../../../../redux/actions/loadAthleteActivitiesActions"

const mapStateToProps = (state: State) => {
	const { hasMore, loadingMore } = state.loadMore
	return {
		data: state.athleteActivities || [],
		apiCallsInProgress: state.apiCallsInProgress,
		hasMore,
		loadingMore,
	}
}

const mapDispatchToProps = {
	loadMoreAthleteActivities,
}

export default connect(mapStateToProps, mapDispatchToProps)
