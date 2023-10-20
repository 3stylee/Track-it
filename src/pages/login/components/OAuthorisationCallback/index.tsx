import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_STATES, AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../../../../constants"
import { ProgressContainer } from "./components"

export interface OAuthorisationCallbackProps {
	authState: string
	apiCallsInProgress: number
	getAuthToken: any
	authUserSuccess: any
}

export const OAuthorisationCallback = ({
	authState,
	apiCallsInProgress,
	getAuthToken,
	authUserSuccess,
}: OAuthorisationCallbackProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem("access_code")) authUserSuccess()
		if (authState === AUTH_STATES.AUTHORISED) {
			navigate("/home")
		}

		if (authState === AUTH_STATES.AUTH_ERROR) {
			navigate("/auth_error")
		}

		const urlParams = new URLSearchParams(window.location.search)
		const code = urlParams.get("code")
		const error = urlParams.get("error")

		if (code) getAuthToken(code, AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET)
		if (error === "access_denied") navigate("/auth_error")
	}, [authState])

	return apiCallsInProgress > 0 ? (
		<ProgressContainer>
			<div className="spinner-border" />
		</ProgressContainer>
	) : null
}
