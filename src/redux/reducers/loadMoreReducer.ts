import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const loadingMoreReducer = (state = initalState.loadMore, action: { type: any }) => {
	switch (action.type) {
		case types.LOAD_MORE_ATHLETE_ACTIVITIES:
		case types.API_CALL_ERROR:
			return {
				...state,
				loadingMore: false,
			}
		case types.BEGIN_LOAD_MORE_API_CALL:
			return {
				...state,
				loadingMore: true,
			}
		case types.NO_MORE_ACTIVITIES:
			return {
				...state,
				hasMore: false,
			}
		case types.LOAD_ATHLETE_ACTIVITIES_SUCCESS:
			return {
				...state,
				hasMore: true,
			}
		default:
			return state
	}
}

export default loadingMoreReducer
