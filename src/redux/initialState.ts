import { startOfToday } from "date-fns"
import { AthleteActivities, CurrentActivity, CurrentActivityStream } from "../models/activities"
import { AthleteData } from "../models/athlete"
import { LoadMore, Units, UserData } from "../models/state"
import { adjustDateForTimezone } from "../utils/adjustDateForTimezone"
import { Sessions } from "../models/sessions"

export interface State {
	athleteActivities: AthleteActivities | null
	gotInitialActivities: boolean
	activitiesHasFilter: boolean
	athleteData: AthleteData
	sessions: Sessions | []
	currentActivityStream: CurrentActivityStream
	currentActivity: CurrentActivity
	apiCallsInProgress: number
	loadMore: LoadMore
	apiError: string
	sidebarExpanded: boolean
	units: Units
	userData: UserData
	selectedDate: Date
}

export default {
	athleteActivities: null,
	gotInitialActivities: false,
	activitiesHasFilter: false,
	sessions: [],
	athleteData: {} as AthleteData,
	currentActivityStream: {} as CurrentActivityStream,
	currentActivity: {} as CurrentActivity,
	loadMore: {
		loadingMore: false,
		hasMore: true,
		page: 0,
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
		firstActivityDate: undefined,
		dateOfLastBackup: undefined,
		access_token: "",
		refresh_token: "",
		expires_at: Infinity,
		email: "",
	},
	selectedDate: adjustDateForTimezone(startOfToday()),
} as State
