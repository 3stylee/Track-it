import React, { useEffect } from "react"
import { AuthorizeCard } from "../authorizeCard"
import { CentralContainer } from "./components"
import { useNavigate } from "react-router-dom"

export const ConnectStrava = () => {
	const navigate = useNavigate()
	useEffect(() => {
		if (localStorage.getItem("access_code")) navigate("/home")
	}, [])

	return (
		<CentralContainer>
			<AuthorizeCard />
		</CentralContainer>
	)
}

export default ConnectStrava
