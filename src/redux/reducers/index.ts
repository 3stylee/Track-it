import { combineReducers } from "@reduxjs/toolkit"
import apiCallsInProgress from "./apiStatusReducer"
import apiError from "./apiErrorReducer"
import activityData from "./loadActivityDataReducer"
import athleteData from "./loadAthleteDataReducer"
import authState from "./authUserReducer"
import sidebarExpanded from "./sidebarReducer"
import dashboardSortMetric from "./dashboardSortReducer"

export const rootReducer = combineReducers({
	apiCallsInProgress,
	apiError,
	activityData,
	athleteData,
	authState,
	sidebarExpanded,
	dashboardSortMetric,
})
