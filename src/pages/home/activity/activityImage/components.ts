import styled from "@emotion/styled"
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
