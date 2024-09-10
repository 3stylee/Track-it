export const CLIENT_ID = "115309"
export const REDIRECT_URI = `${process.env.REACT_APP_BASE_URL}/authorize`
export const SCOPE = "profile%3Aread_all%2Cactivity%3Aread_all%2Cactivity%3Awrite"
export const O_AUTH_URL = `https://www.strava.com/oauth/mobile/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&approval_prompt=auto&scope=${SCOPE}&state=authorize_user`
export const AUTH_TOKEN_BASE_URL = "https://www.strava.com/api/v3/oauth/token"
export const USER_DATA_URL = "https://www.strava.com/api/v3/athlete"
export const ZONES_URL = "https://www.strava.com/api/v3/athlete/zones"
export const EDIT_URL = "https://www.strava.com/api/v3/activities/"
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
export const API_BASE_URL = "https://www.strava.com/api/v3"
export const AUTH_PERMISSIONS = ["read", "activity:write", "activity:read_all", "profile:read_all"]
export const ROUTE_PATHS = {
	DEFAULT: "/",
	CONNECT: "/connect",
	LOGIN: "/login",
	REGISTER: "/register",
	HOME: "/home",
	CHAT: "/home/chat",
	SEARCH_ACTIVITIES: "/home/search",
	SESSIONS: "/home/sessions",
	AUTH_ERROR: "/auth_error",
	MISSING_PERMISSIONS: "/missing_permissions",
	AUTHORIZE: "/authorize",
	ACTIVITY: "/home/activity",
	CALENDAR: "/home/calendar",
}
export const INVALID_EMAIL = "Invalid Email."
export const PASSWORD_BLANK = "Password cannot be blank."
export const SIGN_UP_MESSAGE = "Don't have an account? Sign up here"
export const DATA_ERROR_MESSAGE = "Sorry, we had trouble getting your data, please try again"
export const INITIAL_DATA_MESSAGE = ""
export const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
export const SORT_OPTIONS = {
	WEEK: "Week",
	MONTH: "Month",
}
export const CONNECT_STRAVA_MESSAGE = "Please connect your Strava account"
export const WEEK_GRAPH_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
export const MAX_RECENT_ACTIVITIES = 18
export const NF_404_ERROR_TITLE = "404 Page Not Found"
export const NF_404_ERROR_MESSAGE = "Sorry, but the page you are looking for does not exist"
export const NF_404_ERROR_BUTTON = "Go back home »"
export const AUTH_ERROR_TITLE = "Authentication Error"
export const AUTH_ERROR_MESSAGE = "Sorry, but we were unable to authenticate your Strava account. Please try again"
export const TRY_AGAIN_BUTTON = "Try again »"
export const MISSING_PERMISSIONS_TITLE = "Missing permissions"
export const MISSING_PERMISSIONS_MESSAGE =
	"Sorry, it looks like you've not given us access to some permissions we need regarding your Strava account. Please allow us access to these in order to use the app"
export const TITLE_BANNER_HEIGHT = "4rem"
export const SIDEBAR_ICONS = [
	{ icon: "home", path: "" },
	{ icon: "grid", path: "search" },
	{ icon: "clock", path: "sessions" },
	{ icon: "calendar", path: "calendar" },
]
export const FILTER_RESULTS = "Filter Results"
export const CLEAR_FILTER = "Clear Filter"
export const SELECT_DATE_RANGE = "Select a date range"
export const NO_ACTIVITIES = "No activities found, please upload some to Strava to get started"
export const NO_RESULTS = "Please try another selection, or check you have uploaded your activity to Strava"
export const NO_SESSIONS = "No sessions found, please upload some to Strava to get started"
export const SIDEBAR_WIDTH = "4.875rem"
export const STREAM_RESOLUTION_FACTOR = 15
export const ACTIVITY_GRAPH_TIME_LABELS = 8
export const THEMES = {
	LIGHT: "light",
	DARK: "dark",
}
export const LAP_TABLE_HEADERS = [
	{ name: "Distance", icon: "map-pin" },
	{ name: "Time", icon: "clock" },
	{ name: "Pace", icon: "watch" },
]
export const SESSION_TYPES = ["Session", "Tempo"]
export const MODEL_SCALER_INFO = {
	data_min: [0.0, 24.0, 0.0, 0.612, 2.9, 0.0],
	data_max: [18347.5, 4900.0, 436.0, 8.948, 12.0, 116.0],
}
export const PAGE_SIZE = 72 // Keep as multiple of 12 for grid layout
export const FIREBASE_COLLECTIONS = {
	ACTIVITIES: "activities",
	USERS: "users",
}
export const DAYS_OF_WEEK_SHORT = ["M", "T", "W", "T", "F", "S", "S"]
export const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
export const PAGE_PADDING = "0.875rem"
export const PAGE_PADDING_MOBILE = "0.5rem"
export const BREAKPOINTS = {
	UP: {
		XS: "320px",
		SM: "575px",
		MD: "767px",
		LG: "991px",
		XL: "1199px",
	},
	DOWN: {
		XS: "321px",
		SM: "576px",
		MD: "768px",
		LG: "992px",
		XL: "1200px",
	},
}
export const ACTIVITY_IMAGE_RESOLUTIONS = {
	XS: "300x700",
	SM: "380x900",
	MD: "450x1000",
	LG: "700x1000",
	XL: "800x1030",
	XXL: "1200x1000",
}

export const ACTIVITY_TYPES = ["X-train", "Easy", "Long Run", "Tempo", "Session", "Race"]
export const DELETE_ACTIVITY_CONFIRMATION =
	"Are you sure you want to delete this activity? Note this will only be deleted on Track It, to delete it on Strava please go to the Strava website."
export const NO_LOGGED_IN_USER = "No logged in user found"
export const ATHLETE_ACTIVITIES_ERROR = "Error loading your activities, please check your connection and try again"
export const UPDATE_ACTIVITY_ERROR = "Error updating activity"
export const DELETE_ACTIVITY_ERROR = "Error deleting activity"
export const EDIT_ACTIVITY_ERROR = "Error editing activity"
export const APPLICATION_ERRORS = {
	NO_LOGGED_IN_USER,
	USER_DATA_ERROR: "Error loading user data, please check your connection and try again",
	COPY_ACTIVITIES_ERROR: "Error copying over your activities, please try again",
	STORE_STRAVA_AUTH_ERROR: "Strava authentication error, please refresh or try logging in again",
}
export const DASHBOARD_ERRORS = {
	ATHLETE_ACTIVITIES_ERROR,
	ATHLETE_DATA_ERROR: "Error loading athlete data",
}
export const ACTIVITIES_LIST_ERRORS = {
	ATHLETE_ACTIVITIES_ERROR,
	LOAD_MORE_ACTIVITIES_ERROR: "Error loading more activities",
	UPDATE_ACTIVITY_ERROR,
	DELETE_ACTIVITY_ERROR,
	EDIT_ACTIVITY_ERROR,
}
export const CURRENT_ACTIVITY_ERRORS = {
	CURRENT_ACTIVITY_ERROR: "Error loading current activity",
	UPDATE_ACTIVITY_ERROR,
}
export const SESSIONS_ERRORS = {
	SESSIONS_ERROR: "Error loading sessions, please check your connection and try again",
}
export const TOAST_ERRORS = [UPDATE_ACTIVITY_ERROR, DELETE_ACTIVITY_ERROR, EDIT_ACTIVITY_ERROR]
export const UNIT_VALUES = {
	METRIC: {
		unitString: "km",
		meters: 1000,
	},
	IMPERIAL: {
		unitString: "mi",
		meters: 1609.34,
	},
}
export const HR_ZONES = ["Recovery", "Aerobic", "Threshold", "Anaerobic Endurance", "Anaerobic Power"]

export const HR_ZONE_COLORS = [
	"rgba(255, 99, 132, 1)",
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
]
