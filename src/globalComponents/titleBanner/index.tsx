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
import { ChevronLeft, ChevronRight } from "react-feather"

export interface TitleBannerProps {
	openSidebar: () => void
	closeSidebar: () => void
	sidebarExpanded: boolean
}

export const TitleBanner = ({ openSidebar, closeSidebar, sidebarExpanded }: TitleBannerProps) => {
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
			<CollapseButton onClick={toggleSidebar} showButton={localStorage.getItem("uId") !== null}>
			{sidebarExpanded ? <ChevronLeft size="36px" /> : <ChevronRight size="36px" />}
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
