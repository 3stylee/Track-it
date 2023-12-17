import { DASHBOARD_SORT_OPTIONS } from "../../constants"
import * as types from "./actionTypes"

export const sortWeek = () => {
	return { type: types.DASHBOARD_SORT_WEEK }
}

export const sortMonth = () => {
	return { type: types.DASHBOARD_SORT_MONTH }
}

export const updateSortMetric = (metric: string) => {
	return async function (dispatch: any) {
		switch (metric) {
			case DASHBOARD_SORT_OPTIONS.MONTH:
				dispatch(sortMonth())
				break
			case DASHBOARD_SORT_OPTIONS.WEEK:
				dispatch(sortWeek())
				break
			default:
				break
		}
	}
}
