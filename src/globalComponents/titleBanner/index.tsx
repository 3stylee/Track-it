import React from "react"
import { BannerBackground, BannerText, BannerTitle, CollapseButton, HomeLink, StravaLogo } from "./components"
import connect from "./connect"

export const TitleBanner = ({ openSidebar, closeSidebar, sidebarExpanded }: any) => {
	const toggleSidebar = (): any => {
		if (sidebarExpanded) {
			closeSidebar()
		} else {
			openSidebar()
		}
	}

	const stravaLogo = require("../../assets/images/api_logo_pwrdBy_strava_stack_white.png")
	return (
		<BannerBackground>
			<CollapseButton onClick={toggleSidebar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="42"
					height="42"
					fill="currentColor"
					className="bi bi-list"
					viewBox="0 0 16 16">
					<path
						fillRule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
					/>
				</svg>
			</CollapseButton>
			<BannerTitle>
				<HomeLink href="/home">
					<BannerText>Track It</BannerText>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="0 0 32 32"
						transform="rotate(90)"
						id="olympics">
						<path
							d="M-4.5 1021.362c-4.7 0-8.5 3.8-8.5 8.5v13c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-13c0-4.7-3.8-8.5-8.5-8.5zm0 1c4.164 0 7.5 3.337 7.5 7.5v13c0 4.164-3.336 7.5-7.5 7.5a7.473 7.473 0 0 1-7.5-7.5v-2.5h2v2.5c0 3.039 2.462 5.5 5.5 5.5s5.5-2.461 5.5-5.5v-13c0-3.038-2.462-5.5-5.5-5.5a5.499 5.499 0 0 0-5.5 5.5v9.5h-2v-9.5c0-4.163 3.336-7.5 7.5-7.5zm0 3a4.48 4.48 0 0 1 4.5 4.5v13a4.48 4.48 0 0 1-4.5 4.5 4.48 4.48 0 0 1-4.5-4.5v-3.5h2v3.5c0 1.377 1.124 2.5 2.5 2.5s2.5-1.123 2.5-2.5v-13c0-1.376-1.124-2.5-2.5-2.5a2.506 2.506 0 0 0-2.5 2.5v8.5h-2v-8.5a4.48 4.48 0 0 1 4.5-4.5zm0 3c.84 0 1.5.66 1.5 1.5v13c0 .84-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5v-13c0-.84.66-1.5 1.5-1.5z"
							color="#000"
							fontFamily="sans-serif"
							fontWeight="400"
							overflow="visible"
							transform="translate(21 -1020.362)"></path>
					</svg>
				</HomeLink>
			</BannerTitle>
			<StravaLogo src={stravaLogo} alt="powered by STRAVA" />
		</BannerBackground>
	)
}

export default connect(TitleBanner)
