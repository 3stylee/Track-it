import styled from "@emotion/styled"
import { PAGE_PADDING, PAGE_PADDING_MOBILE, SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	padding: ${PAGE_PADDING};
	padding-top: calc(${TITLE_BANNER_HEIGHT} + ${PAGE_PADDING});
	margin-left: ${SIDEBAR_WIDTH};
	overflow-y: auto;

	@media (max-width: 767px) {
		margin-left: 0;
	}

	@media (max-width: 769px) {
		padding: ${PAGE_PADDING_MOBILE};
		padding-top: calc(${TITLE_BANNER_HEIGHT} + ${PAGE_PADDING_MOBILE});
	}
`
