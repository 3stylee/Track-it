import { combineReducers } from "@reduxjs/toolkit"
import apiCallsInProgress from "./apiStatusReducer"
import apiError from "./apiErrorReducer"
import athleteActivities from "./athleteActivitiesReducer"
import athleteData from "./loadAthleteDataReducer"
import currentActivityStream from "./activityStreamReducer"
import currentActivity from "./loadCurrentActivityReducer"
import sidebarExpanded from "./sidebarReducer"
import units from "./unitReducer"
import userData from "./userDataReducer"
import sessions from "./loadSessionsReducer"
import sessionGroups from "./loadSessionGroupsReducer"
import loadMore from "./loadMoreReducer"
import activitiesHasFilter from "./activitiesFilterReducer"
import gotInitialActivities from "./initialActivitiesReducer"

export const rootReducer = combineReducers({
	apiCallsInProgress,
	gotInitialActivities,
	apiError,
	loadMore,
	athleteActivities,
	activitiesHasFilter,
	sessions,
	sessionGroups,
	athleteData,
	currentActivityStream,
	currentActivity,
	sidebarExpanded,
	units,
	userData,
})
