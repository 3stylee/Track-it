import styled from "@emotion/styled"
import { Badge } from "react-bootstrap"
import { ChevronDown } from "react-feather"

export const StyledBadge = styled(Badge)<{ showBadge: boolean }>`
	background-image: ${({ theme }) => theme.primaryGradient};
	display: ${({ showBadge }) => (showBadge ? "inline" : "none")};
	border-radius: 0.75rem;
	position: absolute;
	right: 0.75rem;
	top: 0.75rem;
	transition: width 0.5s;
	${({ theme }) => theme.name === "dark" && `border: 1px solid ${theme.text};`}

	&:hover {
		cursor: pointer;
	}

	&:hover .badge-chevron {
		width: 1rem;
		margin-left: 0.25rem;
	}
`

export const BadgeChevron = styled(ChevronDown)<{ showDropdown: boolean }>`
	width: ${({ showDropdown }) => (showDropdown ? "1rem" : "0")};
	margin-left: ${({ showDropdown }) => (showDropdown ? "0.25rem" : "0")};
	transition: width 0.3s;
`
