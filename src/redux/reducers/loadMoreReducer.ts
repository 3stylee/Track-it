import * as types from "../actions/actionTypes"
import initalState from "../initialState"

const loadingMoreReducer = (state = initalState.loadMore, action: { type: any }) => {
	switch (action.type) {
		case types.LOAD_MORE_ATHLETE_ACTIVITIES:
			return {
				...state,
				loadingMore: false,
			}
		case types.BEGIN_LOAD_MORE_API_CALL:
			return {
				...state,
				loadingMore: true,
			}
		case types.HAS_NO_MORE_ACTIVITIES:
			return {
				...state,
				hasMore: false,
			}
		case types.HAS_MORE_ACTIVITIES:
			return {
				...state,
				hasMore: true,
			}
		default:
			return state
	}
}

export default loadingMoreReducer
