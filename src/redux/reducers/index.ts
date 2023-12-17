import { combineReducers } from "@reduxjs/toolkit"
import apiCallsInProgress from "./apiStatusReducer"
import data from "./loadDataReducer"
import dataType from "./dataTypeReducer"
import authState from "./authUserReducer"
import sidebarExpanded from "./sidebarReducer"
import dashboardSortMetric from "./dashboardSortReducer"

export const rootReducer = combineReducers({
	apiCallsInProgress,
	data,
	dataType,
	authState,
	sidebarExpanded,
	dashboardSortMetric,
})
