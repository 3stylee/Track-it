import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const ActivityTitle = styled("h5")`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const DescriptionContainer = styled("div")`
	display: flex;
	justify-content: space-between;
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
