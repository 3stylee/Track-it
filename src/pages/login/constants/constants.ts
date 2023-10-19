export const CLIENT_ID = "115309"
export const REDIRECT_URI = "http://localhost:3000/authorize"
export const SCOPE = "profile%3Aread_all%2Cactivity%3Aread_all"
export const O_AUTH_URL = `https://www.strava.com/oauth/mobile/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&approval_prompt=auto&scope=${SCOPE}&state=authorize_user`
export const AUTH_TOKEN_BASE_URL = "https://www.strava.com/api/v3/oauth/token"
export const CLIENT_SECRET = "0bb0ebc20f903faa5d72ff1d3e2247eaf3e205b2"
