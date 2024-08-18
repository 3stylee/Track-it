import { startOfToday } from "date-fns"
import { AthleteActivities, CurrentActivity, CurrentActivityStream } from "../models/activities"
import { AthleteData } from "../models/athlete"
import { LoadMore, Units, UserData } from "../models/state"
import { adjustDateForTimezone } from "../utils/adjustDateForTimezone"
import { Sessions } from "../models/sessions"
import Cookies from "js-cookie"
import { UNIT_VALUES } from "../constants/constants"

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
	apiError: {
		message: string
		status: number
	}
	sidebarExpanded: boolean
	units: Units
	userData: UserData
	selectedDate: Date
}

const unitCookie = Cookies.get("unit")
const initialUnits = unitCookie === "IMPERIAL" ? UNIT_VALUES.IMPERIAL : UNIT_VALUES.METRIC

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
	apiError: {
		message: "",
		status: 0,
	},
	sidebarExpanded: false,
	units: initialUnits,
	userData: {
		stravaAccess: false,
		firstActivityDate: undefined,
		dateOfLastBackup: undefined,
		access_token: "",
		refresh_token: "",
		expires_at: Infinity,
		email: "",
		sex: "",
		zones: [],
	},
	selectedDate: adjustDateForTimezone(startOfToday()),
} as State
