export const CLIENT_ID = "115309"
export const REDIRECT_URI = "http://localhost:3000/authorize"
export const SCOPE = "profile%3Aread_all%2Cactivity%3Aread_all"
export const O_AUTH_URL = `https://www.strava.com/oauth/mobile/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&approval_prompt=auto&scope=${SCOPE}&state=authorize_user`
export const AUTH_TOKEN_BASE_URL = "https://www.strava.com/api/v3/oauth/token"
export const CLIENT_SECRET = "f60cf0fe4050d4142d4e64cba03214b450e6e12e"
export const API_BASE_URL = "https://www.strava.com/api/v3"
export const AUTH_PERMISSIONS = ["read", "activity:read_all", "profile:read_all"]
export const AUTH_STATES = {
	AUTHORISED: "authorised",
	AUTH_ERROR: "auth_error",
	UNAUTHORISED: "unauthorised",
}
export const API_ERROR_MESSAGES = {
	UNAUTHORISED: "Authorization Error",
}
export const ROUTE_PATHS = {
	DEFAULT: "/",
	HOME: "/home",
	SEARCH_ACTIVITIES: "/home/search",
	SESSIONS: "/home/sessions",
	AUTH_ERROR: "/auth_error",
	MISSING_PERMISSIONS: "/missing_permissions",
	AUTHORIZE: "/authorize",
	ACTIVITY: "/home/activity",
	CALENDAR: "/home/calendar",
}
export const DATA_ERROR_MESSAGE = "Sorry, we had trouble getting your data, please try again"
export const INITIAL_DATA_MESSAGE = ""
export const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiM3N0eWxlZSIsImEiOiJjbG80YWMxd3gwMDA4MmtvMmoyeTZsaHRyIn0.j9ejh2FFTVEQoXqWtMMB5A"
export const SORT_OPTIONS = {
	WEEK: "Week",
	MONTH: "Month",
}
export const LOGIN_MESSAGE = "Please authorize your Strava account to get started"
export const WEEK_GRAPH_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
export const MAX_RECENT_ACTIVITIES = 9
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
export const SESSION_TYPES = ["Session", "Hill Session"]
