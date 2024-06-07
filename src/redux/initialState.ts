import { AthleteActivities } from "../pages/home/subpages/activitiesList/models"
import { AUTH_STATES } from "../constants/constants"
import { LoadMore, Units, UserData } from "../models"
import { CurrentActivity, CurrentActivityStream } from "../pages/home/subpages/activity/models"
import { AthleteData } from "../pages/home/subpages/dashboard/models"

export interface State {
	authState: string
	athleteActivities: AthleteActivities | null
	activitiesHasFilter: boolean
	athleteData: AthleteData
	sessions: AthleteActivities | []
	sessionGroups: number[][]
	currentActivityStream: CurrentActivityStream
	currentActivity: CurrentActivity
	dataType: string
	apiCallsInProgress: number
	loadMore: LoadMore
	apiError: string | object
	sidebarExpanded: boolean
	units: Units
	userData: UserData
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	athleteActivities: null,
	activitiesHasFilter: false,
	sessions: [],
	sessionGroups: [],
	athleteData: {} as AthleteData,
	currentActivityStream: {} as CurrentActivityStream,
	currentActivity: {} as CurrentActivity,
	dataType: "",
	loadMore: {
		hasMore: true,
		loadingMore: false,
	},
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
		sessionsLastCopy: undefined,
		access_token: "",
		refresh_token: "",
		expires_at: Infinity,
		email: "",
	},
} as State
