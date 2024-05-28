import { AthleteActivities, DataFlags } from "../pages/home/subpages/activitiesList/models"
import { AUTH_STATES } from "../constants/constants"
import { Units, UserData } from "../models"
import { CurrentActivity, CurrentActivityStream } from "../pages/home/subpages/activity/models"
import { AthleteData } from "../pages/home/subpages/dashboard/models"

export interface State {
	authState: string
	athleteActivities: AthleteActivities
	athleteData: AthleteData
	dataFlags: DataFlags
	currentActivityStream: CurrentActivityStream
	currentActivity: CurrentActivity
	dataType: string
	apiCallsInProgress: number
	apiError: string | object
	sidebarExpanded: boolean
	units: Units
	userData: UserData
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	athleteActivities: [],
	athleteData: {} as AthleteData,
	dataFlags: {
		gotAthleteData: false,
		gotInitialActivities: false,
	},
	currentActivityStream: {} as CurrentActivityStream,
	currentActivity: {} as CurrentActivity,
	dataType: "",
	apiCallsInProgress: 0,
	apiError: "",
	sidebarExpanded: false,
	units: {
		unitString: "km",
		meters: 1000,
	},
	userData: {
		stravaAccess: false,
		dateOfLastBackup: undefined,
		access_token: "",
		refresh_token: "",
		expires_at: Infinity,
		email: "",
	},
} as State
