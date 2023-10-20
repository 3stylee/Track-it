import { AUTH_STATES } from "../constants"

export interface State {
	authState: string
	data: string
	apiCallsInProgress: number
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	data: "",
	apiCallsInProgress: 0,
}
