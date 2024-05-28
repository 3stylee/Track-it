import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AUTH_STATES, ROUTE_PATHS } from "../../constants/constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { UserData } from "../../models"
import { CopyDataScreen } from "../../globalComponents/copyDataScreen"

export interface HomeProps {
	authState: string
	userData: UserData
	loadUserData: () => void
	manualAuthUser: () => void
	toggleTheme: () => void
	storeStravaAuth: (stravaAuth: any, refresh: boolean) => void
	copyStravaActivities: (lastBackup: number | undefined) => void
}

export const Home = ({
	authState,
	userData,
	loadUserData,
	manualAuthUser,
	toggleTheme,
	storeStravaAuth,
	copyStravaActivities,
}: HomeProps) => {
	const navigate = useNavigate()
	const [validToken, setValidToken] = React.useState(false)
	const [refreshingToken, setRefreshingToken] = React.useState(false)

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
		if (authState === AUTH_STATES.AUTHORISED && userData.email === "") {
			loadUserData()
		}
	}, [authState, loadUserData, userData.email])

	useEffect(() => {
		if (userData.email !== "" && !userData.stravaAccess) navigate(ROUTE_PATHS.CONNECT)
	}, [userData, navigate])

	// If strava access token has expired, refresh it
	useEffect(() => {
		if (!(userData.stravaAccess && userData.email)) return
		if (Math.floor(Date.now() / 1000) <= userData.expires_at) {
			setValidToken(true)
		} else if (!refreshingToken) {
			storeStravaAuth(userData.refresh_token, true)
			setRefreshingToken(true)
		}
	}, [userData, validToken])

	// Copy activities to firestore if not already done
	useEffect(() => {
		if (userData.stravaAccess && userData.email && !userData.dateOfLastBackup) {
			copyStravaActivities(undefined)
		}
	}, [userData])

	return authState === AUTH_STATES.AUTHORISED && userData.stravaAccess && validToken ? (
		userData.dateOfLastBackup ? (
			<>
				<Sidebar toggleTheme={toggleTheme} />
				<Outlet />
			</>
		) : (
			<CopyDataScreen />
		)
	) : (
		<AnimatedSpinner />
	)
}

export default connect(Home)
