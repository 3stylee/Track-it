import React from "react"
import { API_ERROR_MESSAGES } from "../../constants/constants"
import { ApiErrorContainer } from "./components"
import connect from "./connect"
import { AlertCircle } from "react-feather"

const ApiError = ({ apiError }: any) => {
	console.error(apiError)
	return (
		<ApiErrorContainer>
			<AlertCircle size="6.25rem" />
			<div>{API_ERROR_MESSAGES.FETCH_ERROR}</div>
			<div>{apiError || "Please try refreshing the page."}</div>
		</ApiErrorContainer>
	)
}

export default connect(ApiError)
