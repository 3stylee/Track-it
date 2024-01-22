import React, { useContext, useEffect } from "react"
import { PageContainer } from "./components"
import { Outlet, useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"
import ThemeContext from "../../theme/themeContext"

export interface HomeProps {
	authState: string
	getAuthToken: any
}

export const Home = ({ authState, getAuthToken }: HomeProps) => {
	const navigate = useNavigate()
	const { theme } = useContext(ThemeContext)
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
				<PageContainer theme={theme}>
					<Sidebar />
					<Outlet />
				</PageContainer>
			) : (
				<AnimatedSpinner />
			)}
		</>
	)
}

export default connect(Home)
