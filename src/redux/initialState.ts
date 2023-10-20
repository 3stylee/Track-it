import { AUTH_STATES } from "../constants"

export interface State {
	authState: string
	data: string
	apiCallsInProgress: number
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	data: "Press one of the buttons to see some data",
	apiCallsInProgress: 0,
}
