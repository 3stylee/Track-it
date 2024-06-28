import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { loadAthleteActivities } from "../../../../redux/actions/loadAthleteActivitiesActions"
import { nextPage, prevPage } from "../../../../redux/actions/loadMoreActions"

const mapStateToProps = (state: State) => {
	const { hasMore, loadingMore, page } = state.loadMore
	return {
		athleteActivities: state.athleteActivities || [],
		apiCallsInProgress: state.apiCallsInProgress,
		hasMore,
		loadingMore,
		page,
	}
}

const mapDispatchToProps = {
	loadAthleteActivities,
	nextPage,
	prevPage,
}

export default connect(mapStateToProps, mapDispatchToProps)
