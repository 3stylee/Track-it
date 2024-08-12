import styled from "@emotion/styled"
import { BREAKPOINTS, TITLE_BANNER_HEIGHT } from "../../../../constants/constants"

export const StyledImage = styled("img")`
	height: 100%;
	width: 100%;
	position: fixed;
	object-fit: cover;
	object-position: center;
	top: ${TITLE_BANNER_HEIGHT};
	left: 0;
	z-index: -1;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		left: 0;
	}
`
