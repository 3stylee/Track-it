import { combineReducers } from "@reduxjs/toolkit"
import apiCallsInProgress from "./apiStatusReducer"
import activityData from "./loadDataReducer"
import dataType from "./dataTypeReducer"
import authState from "./authUserReducer"
import sidebarExpanded from "./sidebarReducer"
import dashboardSortMetric from "./dashboardSortReducer"

export const rootReducer = combineReducers({
	apiCallsInProgress,
	activityData,
	dataType,
	authState,
	sidebarExpanded,
	dashboardSortMetric,
})
