import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_PERMISSIONS, ROUTE_PATHS } from "../../../constants/constants"
import connect from "./connect"
import { AnimatedSpinner } from "../../../globalComponents/animatedSpinner"
import { UserData } from "../../../models/state"

export interface OAuthorisationCallbackProps {
	userData: UserData
	apiCallsInProgress: number
	apiError: string
	storeStravaAuth: (code: string) => void
}

export const OAuthorisationCallback = ({
	userData,
	apiCallsInProgress,
	apiError,
	storeStravaAuth,
}: OAuthorisationCallbackProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (userData.stravaAccess) {
			navigate(ROUTE_PATHS.HOME)
			return
		}

		if (apiError !== "") {
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
		if (code) storeStravaAuth(code)
	}, [userData, apiError])

	return apiCallsInProgress > 0 ? <AnimatedSpinner /> : null
}

export default connect(OAuthorisationCallback)
