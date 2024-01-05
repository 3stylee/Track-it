import React, { useEffect } from "react"
import { PageContainer } from "./components"
import { Outlet, useNavigate } from "react-router-dom"
import { API_BASE_URL, API_ERROR_MESSAGES, AUTH_STATES, CLIENT_ID, CLIENT_SECRET, ROUTE_PATHS } from "../../constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"

export interface HomeProps {
	authState: string
	apiError: string
	getAuthToken: any
}

export const Home = ({ authState, apiError, getAuthToken }: HomeProps) => {
	const navigate = useNavigate()

	// Boot people back to login if they haven't authorised their strava account
	useEffect(() => {
		if (!(localStorage.getItem("access_code") || authState === AUTH_STATES.AUTHORISED)) {
			navigate(ROUTE_PATHS.DEFAULT)
		}
	}, [])

	// If auth token expires, refresh auth token
	useEffect(() => {
		if (apiError === API_ERROR_MESSAGES.UNAUTHORISED) {
			const refreshCode = localStorage.getItem("refresh_code")
			getAuthToken(refreshCode, API_BASE_URL, CLIENT_ID, CLIENT_SECRET, true)
		}
	}, [apiError])

	return (
		<PageContainer>
			<Sidebar />
			<Outlet />
		</PageContainer>
	)
}

export default connect(Home)
