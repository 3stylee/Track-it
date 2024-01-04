export const CLIENT_ID = "115309"
export const REDIRECT_URI = "http://localhost:3000/authorize"
export const SCOPE = "profile%3Aread_all%2Cactivity%3Aread_all"
export const O_AUTH_URL = `https://www.strava.com/oauth/mobile/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&approval_prompt=auto&scope=${SCOPE}&state=authorize_user`
export const AUTH_TOKEN_BASE_URL = "https://www.strava.com/api/v3/oauth/token"
export const CLIENT_SECRET = "f60cf0fe4050d4142d4e64cba03214b450e6e12e"
export const API_BASE_URL = "https://www.strava.com/api/v3"
export const AUTH_STATES = {
	AUTHORISED: "authorised",
	AUTH_ERROR: "auth_error",
	UNAUTHORISED: "unauthorised",
}
export const ROUTE_PATHS = {
	DEFAULT: "/",
	HOME: "/home",
	DASHBOARD: "/home/dashboard",
	AUTH_ERROR: "/auth_error",
	AUTHORIZE: "/authorize",
}
export const DATA_ERROR_MESSAGE = "Sorry, we had trouble getting your data, please try again"
export const INITIAL_DATA_MESSAGE = ""
export const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiM3N0eWxlZSIsImEiOiJjbG80YWMxd3gwMDA4MmtvMmoyeTZsaHRyIn0.j9ejh2FFTVEQoXqWtMMB5A"
export const DASHBOARD_SORT_OPTIONS = {
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
export const AUTH_ERROR_BUTTON = "Try again »"
export const TITLE_BANNER_HEIGHT = "4rem"
