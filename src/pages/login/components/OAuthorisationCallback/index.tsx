import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../../../constants"
import connect from "./connect"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"

export interface OAuthorisationCallbackProps {
	authState: string
	apiCallsInProgress: number
	getAuthToken: any
}

export const OAuthorisationCallback = ({
	authState,
	apiCallsInProgress,
	getAuthToken,
}: OAuthorisationCallbackProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (authState === AUTH_STATES.AUTHORISED) {
			navigate(ROUTE_PATHS.HOME)
		}

		if (authState === AUTH_STATES.AUTH_ERROR) {
			navigate(ROUTE_PATHS.AUTH_ERROR)
		}

		const urlParams = new URLSearchParams(window.location.search)
		const code = urlParams.get("code")
		const error = urlParams.get("error")

		if (code) getAuthToken(code)
		if (error === "access_denied") navigate(ROUTE_PATHS.AUTH_ERROR)
	}, [authState])

	return apiCallsInProgress > 0 ? <AnimatedSpinner /> : null
}

export default connect(OAuthorisationCallback)
