import styled from "@emotion/styled"
import { BREAKPOINTS, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	margin-left: calc(${SIDEBAR_WIDTH} - 0.375rem);
	padding-top: ${TITLE_BANNER_HEIGHT};
	overflow-y: auto;
	scrollbar-width: thin;

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-left: 0;
	}
`
