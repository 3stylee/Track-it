import { AUTH_STATES, INITIAL_DATA_MESSAGE } from "../constants"

export interface State {
	authState: string
	data: object
	dataType: string
	apiCallsInProgress: number
	sidebarExpanded: boolean
}

export default {
	authState: AUTH_STATES.UNAUTHORISED,
	data: { text: INITIAL_DATA_MESSAGE },
	dataType: "",
	apiCallsInProgress: 0,
	sidebarExpanded: false,
}
