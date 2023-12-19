import styled from "@emotion/styled"

export const BannerBackground = styled("div")`
	background-color: #fc4c02;
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
	font-weight: 600;
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
		background-color: #ff6c36;
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
