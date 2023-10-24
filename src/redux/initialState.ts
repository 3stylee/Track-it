import { AUTH_STATES } from "../constants"

export interface State {
	authState: string
	data: object
	dataType: string
	apiCallsInProgress: number
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	data: { text: "Press one of the buttons to see some data" },
	dataType: "",
	apiCallsInProgress: 0,
}
