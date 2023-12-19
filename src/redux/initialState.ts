import { AUTH_STATES, DASHBOARD_SORT_OPTIONS, INITIAL_DATA_MESSAGE } from "../constants"

export interface State {
	authState: string
	activityData: object
	dataType: string
	apiCallsInProgress: number
	sidebarExpanded: boolean
	dashboardSortMetric: string
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	activityData: { text: INITIAL_DATA_MESSAGE },
	dataType: "",
	apiCallsInProgress: 0,
	sidebarExpanded: false,
	dashboardSortMetric: DASHBOARD_SORT_OPTIONS.WEEK,
}
