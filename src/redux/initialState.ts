import { AthleteActivities } from "../pages/home/subpages/activitiesList/models"
import { AUTH_STATES, INITIAL_DATA_MESSAGE } from "../constants"
import { Units } from "../config/models"

export interface State {
	authState: string
	athleteActivities: AthleteActivities
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
	athleteActivities: [],
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
