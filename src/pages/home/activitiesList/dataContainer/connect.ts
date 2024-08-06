import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import {
	beginLoadMoreApiCall,
	loadAthleteActivities,
	nextPage,
} from "../../../../redux/actions/athleteActivitiesActions"

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
