import React, { useEffect } from "react"
import { ColouredContainer } from "./components"
import HeaderContainer from "../headerContainer/connect"
import DataContainer from "../dataContainer/connect"
import { useNavigate } from "react-router-dom"
import { AUTH_STATES } from "../../../../constants"

export const Home = ({ authState }: { authState: string }) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (!(localStorage.getItem("access_code") || authState === AUTH_STATES.AUTHORISED)) {
			navigate("/")
		}
	}, [])

	return (
		<ColouredContainer>
			<HeaderContainer />
			<DataContainer />
		</ColouredContainer>
	)
}
