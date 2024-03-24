import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../constants/constants"

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
	margin: 0 1rem;
	line-height: 1.65;
	font-size: 2.5rem;
	font-family: "TypoRoundBold";
	overflow: hidden;

	@media (max-width: 576px) {
		font-size: 1.5rem;
		margin: 0 0.25rem;
	}
`

export const CollapseButton = styled("button")`
	border: none;
	margin: 0.5rem;
	padding: 0.5rem;
	background: none;
	transition: background-color 0.3s;
	border-radius: 50%;

	&:hover {
		background-color: #fd4499;
	}

	@media (min-width: 769px) {
		display: none;
	}
`
export const BannerTitle = styled("div")`
	display: flex;
	width: 100%;
	justify-content: center;
	padding-left: 60px;

	@media (min-width: 769px) {
		padding-left: 111px;
	}

	@media (max-width: 576px) {
		padding-left: 22px;
	}
`

export const HomeLink = styled("a")`
	display: flex;
	text-decoration: none;
	align-items: center;
	color: var(--bs-heading-color);
	cursor: pointer;
`

export const StravaLogo = styled("img")`
	height: 3rem;

	@media (max-width: 576px) {
		height: 2rem;
		margin-right: 0.25rem;
	}
`
