import React, { useState } from "react"
import { AuthorizeButton, ContainerCard, LinkText, SmallText } from "./components"
import { CONNECT_STRAVA_MESSAGE, O_AUTH_URL } from "../../../constants/constants"
import PrivacyPolicyModal from "../privacyPolicyModal"

export const AuthorizeCard = () => {
	const connectWithStrava = require("../../../assets/images/btn_strava_connectwith_orange@2x.png")
	const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

	return (
		<ContainerCard className="card">
			<div className="card-body">
				<img
					className="card-img"
					src="https://cdn.road.cc/sites/default/files/styles/schema_org/public/strava-logo-2016.png"
					alt="Strava Logo"
				/>
				<h5 className="card-title pt-3">{CONNECT_STRAVA_MESSAGE}</h5>

				<a className="btn" href={O_AUTH_URL}>
					<AuthorizeButton src={connectWithStrava} alt="connect with strava" />
				</a>

				<SmallText>
					By giving us access to your Strava account you accept the terms of our{" "}
					<LinkText onClick={() => setShowPrivacyPolicy(true)}>privacy policy</LinkText>.
				</SmallText>
				<PrivacyPolicyModal show={showPrivacyPolicy} handleClose={() => setShowPrivacyPolicy(false)} />
			</div>
		</ContainerCard>
	)
}
