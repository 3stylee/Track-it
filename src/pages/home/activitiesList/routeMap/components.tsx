import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Badge, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BREAKPOINTS } from "../../../../constants/constants"
import { ChevronDown } from "react-feather"

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
export const StyledBadge = styled(Badge)<{ showBadge: boolean }>`
	display: ${({ showBadge }) => (showBadge ? "inline" : "none")};
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	transition: width 0.5s;
	${({ theme }) => theme.name === "dark" && `border: 1px solid ${theme.text};`}

	&:hover .badge-chevron {
		width: 1rem;
		margin-left: 0.25rem;
	}
`

export const DateText = styled("p")`
	position: absolute;
	left: 0.5rem;
	top: 0.5rem;
	font-size: 0.75rem;
	font-weight: bold;
`
export const BadgeChevron = styled(ChevronDown)<{ showDropdown: boolean }>`
	width: ${({ showDropdown }) => (showDropdown ? "1rem" : "0")};
	margin-left: ${({ showDropdown }) => (showDropdown ? "0.25rem" : "0")};
	transition: width 0.3s;
`
