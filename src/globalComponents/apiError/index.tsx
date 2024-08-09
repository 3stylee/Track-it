import React from "react"
import { ApiErrorContainer } from "./components"
import connect from "./connect"
import { AlertCircle } from "react-feather"

const ApiError = ({ apiError }: any) => {
	console.error(apiError)
	return (
		<ApiErrorContainer>
			<AlertCircle size="6.25rem" />
			<div className="mt-2">{apiError || "Please try refreshing the page."}</div>
		</ApiErrorContainer>
	)
}

export default connect(ApiError)
