import { AthleteActivities, CurrentActivity, CurrentActivityStream } from "../models/activities"
import { AthleteData } from "../models/athlete"
import { LoadMore, Units, UserData } from "../models/state"

export interface State {
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
