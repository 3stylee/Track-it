import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_PERMISSIONS, AUTH_STATES, ROUTE_PATHS } from "../../../../constants/constants"
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
			return
		}

		if (authState === AUTH_STATES.AUTH_ERROR) {
			navigate(ROUTE_PATHS.AUTH_ERROR)
			return
		}

		const urlParams = new URLSearchParams(window.location.search)

		const error = urlParams.get("error")
		if (error === "access_denied") {
			navigate(ROUTE_PATHS.AUTH_ERROR)
			return
		}

		const scope = urlParams.get("scope")
		const allPermissionsArePresent = AUTH_PERMISSIONS.every((permission) => scope?.includes(permission))
		if (!allPermissionsArePresent) {
			navigate(ROUTE_PATHS.MISSING_PERMISSIONS)
			return
		}

		const code = urlParams.get("code")
		if (code) getAuthToken(code)
	}, [authState])

	return apiCallsInProgress > 0 ? <AnimatedSpinner /> : null
}

export default connect(OAuthorisationCallback)
