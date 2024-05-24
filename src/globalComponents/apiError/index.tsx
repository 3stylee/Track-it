import FeatherIcon from "feather-icons-react"
import React from "react"
import { API_ERROR_MESSAGES } from "../../constants/constants"
import { ApiErrorContainer } from "./components"
import connect from "./connect"

const ApiError = ({ apiError }: any) => {
	console.error(apiError)
	return (
		<ApiErrorContainer>
			<FeatherIcon icon="alert-circle" size="6.25rem" />
			<div>{API_ERROR_MESSAGES.STRAVA_FETCH_ERROR}</div>
			<div>{apiError?.message || "Please try refreshing the page."}</div>
		</ApiErrorContainer>
	)
}

export default connect(ApiError)
