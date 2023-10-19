import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AUTH_TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../../constants/constants"
import { ProgressContainer } from "./components"

export const OAuthorisationCallback = () => {
	const [isLoading, setIsLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchToken = async () => {
			const urlParams = new URLSearchParams(window.location.search)
			const code = urlParams.get("code")

			try {
				const response = await axios.post(AUTH_TOKEN_BASE_URL, {
					client_id: CLIENT_ID,
					client_secret: CLIENT_SECRET,
					code: code,
					grant_type: "authorization_code",
				})
				localStorage.setItem("access_code", response.data.access_token)
			} catch (error) {
				throw error
			} finally {
				setIsLoading(false)
				navigate("/home")
			}
		}

		fetchToken()
	}, [])

	return isLoading ? (
		<ProgressContainer>
			<div className="spinner-border" />
		</ProgressContainer>
	) : null
}
