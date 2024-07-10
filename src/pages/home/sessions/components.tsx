import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	padding-top: calc(${TITLE_BANNER_HEIGHT} + 2rem);
	margin-left: ${SIDEBAR_WIDTH};
	overflow-y: auto;

	@media (max-width: 767px) {
		margin-left: 0;
	}

	@media (max-width: 991px) {
		padding: 1.5rem;
		padding-top: calc(${TITLE_BANNER_HEIGHT} + 1.5rem);
	}
`
