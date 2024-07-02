import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { loadAthleteActivities } from "../../../../redux/actions/loadAthleteActivitiesActions"
import { beginLoadMoreApiCall, nextPage } from "../../../../redux/actions/loadMoreActions"

const mapStateToProps = (state: State) => {
	const { hasMore, loadingMore } = state.loadMore
	return {
		athleteActivities: state.athleteActivities || [],
		apiCallsInProgress: state.apiCallsInProgress,
		hasMore,
		loadingMore,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	nextPage,
	beginLoadMoreApiCall,
}

export default connect(mapStateToProps, mapDispatchToProps)
