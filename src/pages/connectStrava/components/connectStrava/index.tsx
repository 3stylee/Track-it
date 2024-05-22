import React, { useEffect } from "react"
import { AuthorizeCard } from "../authorizeCard"
import { CentralContainer } from "./components"
import connect from "./connect"
import { ROUTE_PATHS } from "../../../../constants/constants"
import { useNavigate } from "react-router-dom"
import { AnimatedSpinner } from "../../../../globalComponents/animatedSpinner"

const ConnectStrava = ({ loadUserData, userData }: any) => {
	const navigate = useNavigate()

	// If strava connection present, redirect to home page
	useEffect(() => {
		loadUserData()
	}, [])

	useEffect(() => {
		if (userData.email !== "" && userData.stravaAccess) {
			navigate(ROUTE_PATHS.HOME)
		}
	}, [userData])

	if (userData.email === "") return <AnimatedSpinner />
	return (
		<CentralContainer>
			<AuthorizeCard />
		</CentralContainer>
	)
}

export default connect(ConnectStrava)
