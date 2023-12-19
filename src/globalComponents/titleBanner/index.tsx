import React from "react"
import { BannerBackground, BannerText, BannerTitle, CollapseButton, HomeLink } from "./components"
import connect from "./connect"

export const TitleBanner = ({ openSidebar, closeSidebar, sidebarExpanded }: any) => {
	const toggleSidebar = (): any => {
		if (sidebarExpanded) {
			closeSidebar()
		} else {
			openSidebar()
		}
	}

	return (
		<BannerBackground>
			<CollapseButton onClick={toggleSidebar}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
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
				</HomeLink>
				<img src="https://cdn-icons-png.flaticon.com/512/2151/2151488.png" alt="track icon" />
			</BannerTitle>
		</BannerBackground>
	)
}

export default connect(TitleBanner)
