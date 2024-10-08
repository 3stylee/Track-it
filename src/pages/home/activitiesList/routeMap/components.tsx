import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { BREAKPOINTS } from "../../../../constants/constants"

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`

export const CardContainer = styled("div")`
	height: 100%;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.bootstrap.textColor};
	@media (min-width: ${BREAKPOINTS.DOWN.MD}) {
		transition: transform 0.2s;
		&:hover {
			transform: scale(1.04);
		}
	}
	border-radius: var(--bs-border-radius);
`

export const ImageMap = styled("div")`
	position: relative;
`

export const StyledImage = styled("img")`
	width: 100%;
	border-radius: var(--bs-border-radius);
`

export const DateText = styled("p")`
	margin: 0.25rem 0;
	font-size: 0.675rem;
	color: ${({ theme }) => theme.secondaryText};
	font-weight: bold;
`

const gradient = keyframes`
	from {
	  left: 0%;
	}
	
	to {
	  left: calc(100% - 100px);
	}
`

export const ImagePlaceholder = styled("div")`
	background: ${({ theme }) => theme.loading.placeholderBackground};
	aspect-ratio: 3/2;
	border-radius: var(--bs-border-radius);
	position: relative;

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100px;
		background: ${({ theme }) => theme.loading.placeholderGradient};
		border-radius: var(--bs-border-radius);
		animation: ${gradient} 1s infinite ease-in-out;
	}
`

export const ActivityDescription = styled("div")`
	padding: 1rem 0.5rem;
	padding-bottom: 0;
	position: relative;
`

export const ActivityTitle = styled("h5")`
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
	font-size: 1.125rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	width: 90%;
`

export const MoreButton = styled("span")`
	position: absolute;
	top: 0.75rem;
	right: 0;
	border-radius: 50%;
	height: 2rem;
	width: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s;

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}
`
