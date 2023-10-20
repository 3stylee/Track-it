import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_STATES, AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET, ROUTE_PATHS } from "../../../../constants"
import { ProgressContainer } from "./components"

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

		if (code) getAuthToken(code, AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET)
		if (error === "access_denied") navigate(ROUTE_PATHS.AUTH_ERROR)
	}, [authState])

	return apiCallsInProgress > 0 ? (
		<ProgressContainer>
			<div className="spinner-border" />
		</ProgressContainer>
	) : null
}
