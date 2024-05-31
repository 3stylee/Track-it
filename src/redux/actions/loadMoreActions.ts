import * as types from "./actionTypes"

export const beginLoadMoreApiCall = () => {
	return { type: types.BEGIN_LOAD_MORE_API_CALL }
}

export const hasNoMoreActivities = () => {
	return { type: types.NO_MORE_ACTIVITIES }
}
