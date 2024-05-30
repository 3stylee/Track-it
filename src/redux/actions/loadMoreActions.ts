import * as types from "./actionTypes"

export const beginLoadMoreApiCall = () => {
	return { type: types.BEGIN_LOAD_MORE_API_CALL }
}

export const hasMoreActivities = () => {
	return { type: types.HAS_MORE_ACTIVITIES }
}

export const hasNoMoreActivities = () => {
	return { type: types.HAS_NO_MORE_ACTIVITIES }
}
