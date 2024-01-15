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
	transition: box-shadow 0.1s ease-in-out;
	&:hover {
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
	}
`
