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
