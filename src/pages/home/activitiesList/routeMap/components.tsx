import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BREAKPOINTS } from "../../../../constants/constants"

export const ActivityTitle = styled("h5")`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
	margin-bottom: 1rem;
`

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`
export const CardContainer = styled(Card)`
	@media (min-width: ${BREAKPOINTS.DOWN.MD}) {
		transition: transform 0.2s;
		&:hover {
			transform: scale(1.04);
		}
	}
`
export const StyledImage = styled("img")`
	border-top-left-radius: var(--bs-border-radius);
	border-top-right-radius: var(--bs-border-radius);
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
	border-top-right-radius: var(--bs-border-radius);
	border-top-left-radius: var(--bs-border-radius);
	position: relative;

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100px;
		background: linear-gradient(90deg, #eee, #f4f4f4, #eee);
		animation: ${gradient} 1s infinite ease-in-out;
	}
`

export const DateText = styled("p")`
	position: absolute;
	left: 0.5rem;
	top: 0.5rem;
	font-size: 0.75rem;
	font-weight: bold;
`
