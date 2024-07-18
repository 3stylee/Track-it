import styled from "@emotion/styled"
import { BREAKPOINTS, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../constants/constants"

export const Container = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	margin-top: ${TITLE_BANNER_HEIGHT};
	margin-left: ${SIDEBAR_WIDTH};

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-left: 0;
	}
`
