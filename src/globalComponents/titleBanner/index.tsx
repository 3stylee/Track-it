import React from "react"
import {
	BannerBackground,
	BannerText,
	BannerTitle,
	CollapseButton,
	HomeLink,
	StravaLogo,
	TrackLogo,
} from "./components"
import connect from "./connect"
import FeatherIcon from "feather-icons-react"

export interface TitleBannerProps {
	openSidebar: () => void
	closeSidebar: () => void
	sidebarExpanded: boolean
	authState: string
}

export const TitleBanner = ({ openSidebar, closeSidebar, sidebarExpanded, authState }: TitleBannerProps) => {
	const toggleSidebar = (): any => {
		if (sidebarExpanded) {
			closeSidebar()
		} else {
			openSidebar()
		}
	}
	const stravaLogo = require("../../assets/images/api_logo_pwrdBy_strava_stack_white.png")
	const trackLogo = require("../../assets/images/olympics.png")
	return (
		<BannerBackground>
			<CollapseButton onClick={toggleSidebar} showButton={authState === "authorised"}>
				<FeatherIcon icon={`chevrons-${sidebarExpanded ? "left" : "right"}`} size="36px" />
			</CollapseButton>
			<BannerTitle>
				<HomeLink href="/home">
					<BannerText>Track It</BannerText>
					<TrackLogo src={trackLogo} alt="Athletics Track" />
				</HomeLink>
			</BannerTitle>
			<StravaLogo src={stravaLogo} alt="powered by STRAVA" />
		</BannerBackground>
	)
}

export default connect(TitleBanner)
