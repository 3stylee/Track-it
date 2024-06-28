import * as types from "./actionTypes"

export const beginLoadMoreApiCall = () => {
	return { type: types.BEGIN_LOAD_MORE_API_CALL }
}

export const hasNoMoreActivities = () => {
	return { type: types.NO_MORE_ACTIVITIES }
}

export const nextPage = () => {
	return { type: types.NEXT_PAGE }
}

export const prevPage = () => {
	return { type: types.PREV_PAGE }
}

export const resetPageNumber = () => {
	return { type: types.RESET_PAGE_NUMBER }
}
