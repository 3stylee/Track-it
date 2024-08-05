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
`

export const ImageMap = styled("div")`
	position: relative;
`

export const StyledImage = styled("img")`
	width: 100%;
	border-radius: var(--bs-border-radius);
`

export const DateText = styled("p")`
	position: absolute;
	left: 0.5rem;
	top: 0.5rem;
	font-size: 0.75rem;
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
	background: #eee;
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
		background: linear-gradient(90deg, #eee, #f4f4f4, #eee);
		border-radius: var(--bs-border-radius);
		animation: ${gradient} 1s infinite ease-in-out;
	}
`

export const ActivityDescription = styled("div")`
	padding-top: 1rem;
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
	margin-bottom: 1rem;
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
