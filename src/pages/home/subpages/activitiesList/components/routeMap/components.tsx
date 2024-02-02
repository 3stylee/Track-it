import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { THEMES } from "../../../../../../constants"

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
		border-right: 1px solid ${({ theme }: any) => (theme === THEMES.DARK ? "#343a40" : "#e9ecef")};
		padding-right: 0.75rem;
		margin-left: 0.75rem;
	}

	& > *:first-child {
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
export const CardContainer = styled("div")`
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
