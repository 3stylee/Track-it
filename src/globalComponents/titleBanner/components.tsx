import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../constants"

export const BannerBackground = styled("div")`
	background-color: #663dff;
	background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
	height: ${TITLE_BANNER_HEIGHT};
	display: flex;
	padding-left: 1rem;
	border-bottom: 0.125rem solid black;
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
	border: none;
	margin: 0.5rem;
	margin-left: 0;
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
