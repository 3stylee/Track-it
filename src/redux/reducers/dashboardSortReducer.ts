import { DASHBOARD_SORT_OPTIONS } from "../../constants"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const dashboardSortReducer = (state = initialState.dashboardSortMetric, action: { type: string }): string => {
	switch (action.type) {
		case types.DASHBOARD_SORT_MONTH:
			return DASHBOARD_SORT_OPTIONS.MONTH
		case types.DASHBOARD_SORT_WEEK:
			return DASHBOARD_SORT_OPTIONS.WEEK
		default:
			return state
	}
}

export default dashboardSortReducer
