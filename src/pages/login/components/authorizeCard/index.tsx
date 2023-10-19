import React from "react"
import { ContainerCard } from "./components"
import { O_AUTH_URL } from "../../constants/constants"

export const AuthorizeCard = () => (
	<ContainerCard className="card">
		<div className="card-body">
			<h5 className="card-title">Please Authorize your Strava account</h5>
			<a href={O_AUTH_URL}>Connect Account</a>
		</div>
	</ContainerCard>
)
