import { combineReducers } from "@reduxjs/toolkit"
import apiCallsInProgress from "./apiStatusReducer"
import apiError from "./apiErrorReducer"
import athleteActivities from "./loadAthleteActivitiesReducer"
import athleteData from "./loadAthleteDataReducer"
import currentActivityStream from "./activityStreamReducer"
import currentActivity from "./loadCurrentActivityReducer"
import authState from "./authUserReducer"
import sidebarExpanded from "./sidebarReducer"
import dashboardSortMetric from "./dashboardSortReducer"

export const rootReducer = combineReducers({
	apiCallsInProgress,
	apiError,
	athleteActivities,
	athleteData,
	currentActivityStream,
	currentActivity,
	authState,
	sidebarExpanded,
	dashboardSortMetric,
})
