import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../constants/constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { UserData } from "../../models"

export interface HomeProps {
	authState: string
	userData: UserData
	loadUserData: () => void
	manualAuthUser: () => void
	toggleTheme: () => void
}

export const Home = ({ authState, userData, loadUserData, manualAuthUser, toggleTheme }: HomeProps) => {
	const navigate = useNavigate()

	// Boot user back to login if they haven't logged in
	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				navigate(ROUTE_PATHS.LOGIN)
			} else if (authState === AUTH_STATES.UNAUTHORISED) {
				// synchronise with authorisation state
				manualAuthUser()
			}
		})
	}, [authState])

	// If strava connection not present, redirect to connect page
	useEffect(() => {
		if (authState === AUTH_STATES.AUTHORISED) loadUserData()
	}, [authState])

	useEffect(() => {
		if (userData.email !== "" && !userData.stravaAccess) navigate(ROUTE_PATHS.CONNECT)
	}, [userData])

	if (!(authState === AUTH_STATES.AUTHORISED && userData.stravaAccess)) return <AnimatedSpinner />
	return (
		<>
			<Sidebar toggleTheme={toggleTheme} />
			<Outlet />
		</>
	)
}

export default connect(Home)
