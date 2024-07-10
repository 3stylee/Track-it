import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	padding: 1.5rem 2rem;
	padding-top: calc(${TITLE_BANNER_HEIGHT} + 1.5rem);
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
