import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import {
	beginLoadMoreApiCall,
	loadAthleteActivities,
	nextPage,
} from "../../../../redux/actions/athleteActivitiesActions"
import { ACTIVITIES_LIST_ERRORS } from "../../../../constants/constants"

const mapStateToProps = (state: State) => {
	const { hasMore, loadingMore } = state.loadMore
	const initialLoadError = state.apiError.message === ACTIVITIES_LIST_ERRORS.ATHLETE_ACTIVITIES_ERROR
	const loadMoreError = state.apiError.message === ACTIVITIES_LIST_ERRORS.LOAD_MORE_ACTIVITIES_ERROR
	return {
		athleteActivities: state.athleteActivities || [],
		apiCallsInProgress: state.apiCallsInProgress,
		hasMore,
		loadingMore,
		initialLoadError,
		loadMoreError,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	nextPage,
	beginLoadMoreApiCall,
}

export default connect(mapStateToProps, mapDispatchToProps)
