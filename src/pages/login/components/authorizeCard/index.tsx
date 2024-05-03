import React from "react"
import { AuthorizeButton, ContainerCard } from "./components"
import { LOGIN_MESSAGE, O_AUTH_URL } from "../../../../constants/constants"

export const AuthorizeCard = () => {
	const connectWithStrava = require("../../../../assets/images/btn_strava_connectwith_orange@2x.png")
	return (
		<ContainerCard className="card">
			<div className="card-body">
				<img
					className="card-img"
					src="https://cdn.road.cc/sites/default/files/styles/schema_org/public/strava-logo-2016.png"
					alt="Strava Logo"
				/>
				<h5 className="card-title pt-3">{LOGIN_MESSAGE}</h5>
				<a className="btn mt-2" href={O_AUTH_URL}>
					<AuthorizeButton src={connectWithStrava} alt="connect with strava" />
				</a>
			</div>
		</ContainerCard>
	)
}
