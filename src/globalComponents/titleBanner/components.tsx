import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../constants"

export const BannerBackground = styled("div")`
	background-color: var(--bs-primary);
	background-image: linear-gradient(319deg, var(--bs-primary) 0%, #aa00ff 37%, #cc4499 100%);
	height: ${TITLE_BANNER_HEIGHT};
	display: flex;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	z-index: 10;
`

export const BannerText = styled("p")`
	margin: 0 1rem 0 1rem;
	line-height: 1.65;
	font-size: 2.5rem;
	font-family: "TypoRoundBold";
	overflow: hidden;
`

export const CollapseButton = styled("button")`
	@media (min-width: 769px) {
		display: none;
	}

	border: none;
	margin: 0.5rem;

	padding: 0.5rem;
	background: none;
	font: inherit;
	cursor: pointer;
	transition: background-color 0.3s;
	border-radius: 50%;

	&:hover {
		background-color: #fd4499;
	}
`
export const BannerTitle = styled("div")`
	display: flex;
	width: 100%;
	justify-content: center;
	padding-right: 3.5rem;

	@media (min-width: 769px) {
		padding-right: 0;
		padding-left: 111px;
	}
`

export const HomeLink = styled("a")`
	display: flex;
	text-decoration: none;
	color: var(--bs-heading-color);
	cursor: pointer;
`

export const StravaLogo = styled("img")`
	height: 3rem;

	@media (max-width: 768px) {
		display: none;
	}
`
