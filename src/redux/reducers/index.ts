import { combineReducers } from "@reduxjs/toolkit"
import apiCallsInProgress from "./apiStatusReducer"
import apiError from "./apiErrorReducer"
import athleteActivities from "./loadAthleteActivitiesReducer"
import athleteData from "./loadAthleteDataReducer"
import currentActivityStream from "./activityStreamReducer"
import currentActivity from "./loadCurrentActivityReducer"
import authState from "./authUserReducer"
import sidebarExpanded from "./sidebarReducer"
import units from "./unitReducer"
import dataFlags from "./dataFlagsReducer"
import userData from "./userDataReducer"

export const rootReducer = combineReducers({
	apiCallsInProgress,
	apiError,
	athleteActivities,
	athleteData,
	dataFlags,
	currentActivityStream,
	currentActivity,
	authState,
	sidebarExpanded,
	units,
	userData,
})
