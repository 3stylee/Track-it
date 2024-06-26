export const CLIENT_ID = "115309"
export const REDIRECT_URI = `${process.env.REACT_APP_BASE_URL}/authorize`
export const SCOPE = "profile%3Aread_all%2Cactivity%3Aread_all"
export const O_AUTH_URL = `https://www.strava.com/oauth/mobile/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&approval_prompt=auto&scope=${SCOPE}&state=authorize_user`
export const AUTH_TOKEN_BASE_URL = "https://www.strava.com/api/v3/oauth/token"
export const USER_DATA_URL = "https://www.strava.com/api/v3/athlete"
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
export const API_BASE_URL = "https://www.strava.com/api/v3"
export const AUTH_PERMISSIONS = ["read", "activity:read_all", "profile:read_all"]
export const API_ERROR_MESSAGES = {
	UNAUTHORISED: "Authorization Error",
	STRAVA_FETCH_ERROR: "Sorry, we are having trouble accessing your Strava data right now.",
}
export const ROUTE_PATHS = {
	DEFAULT: "/",
	CONNECT: "/connect",
	LOGIN: "/login",
	REGISTER: "/register",
	HOME: "/home",
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
export const MAX_RECENT_ACTIVITIES = 9
export const NF_404_ERROR_TITLE = "404 Page Not Found"
export const NF_404_ERROR_MESSAGE = "Sorry, but the page you are looking for does not exist"
export const NF_404_ERROR_BUTTON = "Go back home »"
export const AUTH_ERROR_TITLE = "Authentication Error"
export const NO_LOGGED_IN_USER = "No logged in user found"
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
export const NO_RESULTS = "Please try another selection, or check you have uploaded your activity to Strava"
export const SIDEBAR_WIDTH = "3.5rem"
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
export const ACTIVITY_LABEL_MAPPING = {
	0: "Easy",
	1: "Long Run",
	2: "Race",
	3: "Session",
	4: "Tempo",
}
export const MODEL_SCALER_INFO = {
	data_min: [0.0, 24.0, 0.0, 0.612, 2.9, 0.0],
	data_max: [18347.5, 4900.0, 436.0, 8.948, 12.0, 116.0],
}
export const PAGE_SIZE = 72 // Keep as multiple of 12 for grid layout
export const FIREBASE_COLLECTIONS = {
	ACTIVITIES: "activities",
	USERS: "users",
	SESSION_GROUPS: "sessionGroups",
}
