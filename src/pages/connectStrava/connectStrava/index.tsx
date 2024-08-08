import React, { useEffect } from "react"
import { AuthorizeCard } from "../authorizeCard"
import { CentralContainer } from "./components"
import { ROUTE_PATHS } from "../../../constants/constants"
import { useNavigate } from "react-router-dom"

export const ConnectStrava = () => {
	const navigate = useNavigate()
	const backgroundImage = require("../../../assets/images/signUpBackground.png")

	// If strava connection present, redirect to home page
	useEffect(() => {
		if (localStorage.getItem("uId")) navigate(ROUTE_PATHS.HOME)
	}, [])

	return (
		<CentralContainer backgroundImage={backgroundImage}>
			<AuthorizeCard />
		</CentralContainer>
	)
}
