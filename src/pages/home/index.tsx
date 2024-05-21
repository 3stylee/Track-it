import React, { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../constants/constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export interface HomeProps {
	getAuthToken: any
	authState: string
	manualAuthUser: () => void
	toggleTheme: () => void
}

export const Home = ({ getAuthToken, authState, manualAuthUser, toggleTheme }: HomeProps) => {
	const navigate = useNavigate()
	const [isTokenValid, setIsTokenValid] = useState(false)

	// Boot user back to login if they haven't logged in
	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				navigate(ROUTE_PATHS.LOGIN)
			} else {
				// synchronise with authorisation state
				manualAuthUser()
			}
		})
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

	if (authState !== AUTH_STATES.AUTHORISED) return null

	return (
		<>
			{isTokenValid ? (
				<>
					<Sidebar toggleTheme={toggleTheme} />
					<Outlet />
				</>
			) : (
				<AnimatedSpinner />
			)}
		</>
	)
}

export default connect(Home)
