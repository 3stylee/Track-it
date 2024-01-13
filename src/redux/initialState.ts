import { AUTH_STATES, DASHBOARD_SORT_OPTIONS, INITIAL_DATA_MESSAGE } from "../constants"

export interface State {
	authState: string
	activityData: object
	athleteData: object
	currentActivityStream: object
	dataType: string
	apiCallsInProgress: number
	apiError: string
	sidebarExpanded: boolean
	dashboardSortMetric: string
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	activityData: { text: INITIAL_DATA_MESSAGE },
	athleteData: { text: INITIAL_DATA_MESSAGE },
	currentActivityStream: {},
	dataType: "",
	apiCallsInProgress: 0,
	apiError: "",
	sidebarExpanded: false,
	dashboardSortMetric: DASHBOARD_SORT_OPTIONS.WEEK,
}
