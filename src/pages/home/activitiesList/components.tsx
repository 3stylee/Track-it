import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	margin-left: ${SIDEBAR_WIDTH};
	padding-top: ${TITLE_BANNER_HEIGHT};
	overflow-y: auto;
	scrollbar-width: thin;

	@media (max-width: 767px) {
		margin-left: 0;
	}
`
