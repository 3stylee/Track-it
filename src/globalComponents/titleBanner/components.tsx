import styled from "@emotion/styled"

export const BannerBackground = styled("div")`
	background-color: #663dff;
	background-image: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
	height: 5rem;
	text-align: center;
	display: flex;
	padding-left: 1rem;
	border-bottom: 0.125rem solid black;
	justify-content: space-between;
	position: relative;
	z-index: 10;
`

export const BannerText = styled("p")`
	font-size: 3.25rem;
	font-family: "TypoRoundBold";
	margin-right: 1.5rem;
	height: 5rem;
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
	margin-right: 5rem;

	@media (max-width: 576px) {
		margin-right: 0rem;
	}
`

export const HomeLink = styled("a")`
	text-decoration: none;
	color: var(--bs-heading-color);
	cursor: pointer;

	&:hover {
		color: rgba(0, 0, 0, 0.5);
	}
`
