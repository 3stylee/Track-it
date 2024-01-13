import { AUTH_STATES, DASHBOARD_SORT_OPTIONS, INITIAL_DATA_MESSAGE } from "../constants"

export interface State {
	authState: string
	athleteActivities: object
	athleteData: object
	currentActivityStream: object
	currentActivity: object
	dataType: string
	apiCallsInProgress: number
	apiError: string
	sidebarExpanded: boolean
	dashboardSortMetric: string
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	athleteActivities: { text: INITIAL_DATA_MESSAGE },
	athleteData: { text: INITIAL_DATA_MESSAGE },
	currentActivityStream: {},
	currentActivity: {},
	dataType: "",
	apiCallsInProgress: 0,
	apiError: "",
	sidebarExpanded: false,
	dashboardSortMetric: DASHBOARD_SORT_OPTIONS.WEEK,
}
