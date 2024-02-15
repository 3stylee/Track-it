import { Units } from "../config/models"
import { AUTH_STATES, INITIAL_DATA_MESSAGE } from "../constants"

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
	units: Units
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
	units: {
		unitString: "km",
		meters: 1000,
	},
} as State
