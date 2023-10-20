import React from "react"
import { AuthorizeButton, ContainerCard } from "./components"
import { O_AUTH_URL } from "../../../../constants"

export const AuthorizeCard = () => (
	<ContainerCard className="card w-25">
		<div className="card-body">
			<img
				className="card-img"
				src="https://cdn.road.cc/sites/default/files/styles/schema_org/public/strava-logo-2016.png"
				alt="Strava Logo"
			/>
			<h5 className="card-title pt-3">Please Authorize your Strava account to get started</h5>
			<AuthorizeButton className="btn mt-2" href={O_AUTH_URL}>
				Connect Account
			</AuthorizeButton>
		</div>
	</ContainerCard>
)
