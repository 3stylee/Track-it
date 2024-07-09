import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	padding: 1.5rem 2rem;
	margin-top: ${TITLE_BANNER_HEIGHT};
	margin-left: ${SIDEBAR_WIDTH};
	height: 90vh;
	overflow-y: auto;

	@media (max-width: 767px) {
		margin-left: 0;
	}

	@media (max-width: 991px) {
		padding: 1.5rem;
	}
`
