import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { APPLICATION_ERRORS, ROUTE_PATHS, TOAST_ERRORS } from "../../constants/constants"
import Sidebar from "../../globalComponents/sidebar"
import connect from "./connect"
import { AnimatedSpinner } from "../../globalComponents/animatedSpinner"
import { UserData } from "../../models/state"
import { CopyDataScreen } from "../../globalComponents/copyDataScreen"
import ApiError from "../../globalComponents/apiError"
import { AthleteActivities } from "../../models/activities"
import { Toast } from "../../globalComponents/toast"

export interface HomeProps {
	userData: UserData
	apiError: {
		message: string
		status: number
	}
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
	const [showToast, setShowToast] = React.useState(false)

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

	// Show toast if there is an error
	useEffect(() => {
		if (TOAST_ERRORS.includes(apiError.message)) setShowToast(true)
	}, [apiError.status])

	if (Object.values(APPLICATION_ERRORS).includes(apiError.message)) return <ApiError />
	return userData.stravaAccess && userData.access_token && validToken ? (
		userData.dateOfLastBackup ? (
			<>
				<Sidebar toggleTheme={toggleTheme} />
				<Outlet />
				<Toast showToast={showToast} setShowToast={setShowToast} message={apiError.message} />
			</>
		) : (
			<CopyDataScreen />
		)
	) : (
		<AnimatedSpinner />
	)
}

export default connect(Home)
