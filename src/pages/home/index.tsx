import React, { useEffect } from "react"
import { PageContainer } from "./components"
import { Outlet, useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"

export interface HomeProps {
	authState: string
	getAuthToken: any
	toggleTheme: () => void
}

export const Home = ({ authState, getAuthToken, toggleTheme }: HomeProps) => {
	const navigate = useNavigate()
	const [isTokenValid, setIsTokenValid] = React.useState(false)

	// Boot user back to login if they haven't authorised their strava account
	useEffect(() => {
		if (!(localStorage.getItem("access_code") || authState === AUTH_STATES.AUTHORISED)) {
			navigate(ROUTE_PATHS.DEFAULT)
		}
	}, [])

	// If auth token expires, refresh auth token
	useEffect(() => {
		if (Math.floor(Date.now() / 1000) >= parseInt(localStorage.getItem("expires_at") || "0")) {
			const refreshCode = localStorage.getItem("refresh_code")
			getAuthToken(refreshCode, true).then(() => setIsTokenValid(true))
		} else {
			setIsTokenValid(true)
		}
	}, [])

	return (
		<>
			{isTokenValid ? (
				<PageContainer>
					<Sidebar toggleTheme={toggleTheme} />
					<Outlet />
				</PageContainer>
			) : (
				<AnimatedSpinner />
			)}
		</>
	)
}

export default connect(Home)
