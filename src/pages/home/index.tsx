import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { APPLICATION_ERRORS, ROUTE_PATHS } from "../../constants/constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"
import { UserData } from "../../models/state"
import { CopyDataScreen } from "../../globalComponents/copyDataScreen"
import ApiError from "../../globalComponents/apiError"
import { AthleteActivities } from "../../models/activities"

export interface HomeProps {
	userData: UserData
	apiError: string
	loadUserData: () => void
	toggleTheme: () => void
	storeStravaAuth: (stravaAuth: any, refresh: boolean) => void
	copyStravaActivities: (newActivities?: AthleteActivities) => void
}

export const Home = ({
	userData,
	apiError,
	loadUserData,
	toggleTheme,
	storeStravaAuth,
	copyStravaActivities,
}: HomeProps) => {
	const navigate = useNavigate()
	const [validToken, setValidToken] = React.useState(false)
	const [refreshingToken, setRefreshingToken] = React.useState(false)

	// If strava account not connected, redirect to connect page
	useEffect(() => {
		if (!localStorage.getItem("uId")) navigate(ROUTE_PATHS.CONNECT)
	}, [userData, navigate])

	// If strava access token has expired, refresh it
	useEffect(() => {
		loadUserData()
	}, [])

	useEffect(() => {
		if (!userData.stravaAccess) return
		if (Math.floor(Date.now() / 1000) <= userData.expires_at) {
			setValidToken(true)
		} else if (!refreshingToken) {
			storeStravaAuth(userData.refresh_token, true)
			setRefreshingToken(true)
		}
	}, [userData, validToken])

	// Copy activities to firestore if not already done
	useEffect(() => {
		if (userData.stravaAccess && userData.access_token && !userData.dateOfLastBackup) {
			copyStravaActivities()
		}
	}, [userData])

	if (Object.values(APPLICATION_ERRORS).includes(apiError)) return <ApiError />
	return userData.stravaAccess && userData.access_token && validToken ? (
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
