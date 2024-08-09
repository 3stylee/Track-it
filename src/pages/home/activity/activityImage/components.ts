import styled from "@emotion/styled"
import { Badge } from "react-bootstrap"
import { BREAKPOINTS, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../../constants/constants"

export const StyledImage = styled("img")`
	height: 100%;
	width: 100%;
	position: fixed;
	object-fit: cover;
	object-position: center;
	top: ${TITLE_BANNER_HEIGHT};
	left: ${SIDEBAR_WIDTH};
	z-index: -1;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		left: 0;
	}
`
export const ImageContainer = styled("div")`
	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		margin-bottom: 0.5rem;
	}
`
export const StyledBadge = styled(Badge)`
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
	${({ theme }) => theme.name === "dark" && `border: 1px solid ${theme.text};`}
`
