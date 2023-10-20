import React from "react"
import { O_AUTH_URL } from "../../../../constants"

export const AuthError = () => {
	return (
		<div className="bg-body-tertiary p-5 m-5 rounded">
			<h1>Authentication Error</h1>
			<p className="lead">Sorry but we were unable to authenticate your Strava account, please try again</p>
			<a className="btn btn-lg btn-primary" href={O_AUTH_URL} role="button">
				Try again »
			</a>
		</div>
	)
}
