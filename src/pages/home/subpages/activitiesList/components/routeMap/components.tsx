import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Badge, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ActivityTitle = styled("h5")`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
	margin-bottom: 1rem;
`
export const ActivityStats = styled("div")`
	display: flex;

	& > * {
		border-right: 1px solid ${({ theme }) => theme.text};
		padding-right: 0.75rem;
		margin-left: 0.75rem;
	}

	& > *:first-of-type {
		margin-left: 0;
	}

	& > *:last-child {
		border-right: none;
	}
`

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`
export const CardContainer = styled(Card)`
	@media (min-width: 768px) {
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
export const StyledBadge = styled(Badge)<{ display: boolean }>`
	display: ${({ display }) => (display ? "inline" : "none")};
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	${({ theme }) => theme.name === "dark" && `border: 1px solid ${theme.text};`}
`
