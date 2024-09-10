import React from "react"
import { ApiErrorContainer } from "./components"
import connect from "./connect"
import { AlertCircle } from "react-feather"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ApiError = ({ apiError, height, backButton, logoutUser }: any) => {
	console.error(apiError)
	const navigate = useNavigate()
	const handleBack = () => {
		localStorage.clear()
		logoutUser()
		navigate("/")
	}
	return (
		<ApiErrorContainer height={height}>
			<AlertCircle size="6.25rem" />
			<div className="mt-2 text-center">{apiError || "Please try refreshing the page."}</div>
			{backButton && (
				<Button onClick={handleBack} className="mt-2">
					Go Back To Login
				</Button>
			)}
		</ApiErrorContainer>
	)
}

export default connect(ApiError)
