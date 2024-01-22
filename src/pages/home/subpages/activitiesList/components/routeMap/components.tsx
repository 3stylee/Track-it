import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { THEMES } from "../../../../../../constants"

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
	&:hover {
		box-shadow: 0px 0px 5px 2px
			${({ theme }) => (theme === THEMES.LIGHT ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)")};
	}
`
export const StyledImage = styled("img")`
	border-top-left-radius: var(--bs-border-radius);
	border-top-right-radius: var(--bs-border-radius);
`
