import styled from "@emotion/styled"
import {
	BREAKPOINTS,
	PAGE_PADDING,
	PAGE_PADDING_MOBILE,
	SIDEBAR_WIDTH,
	TITLE_BANNER_HEIGHT,
} from "../../../constants/constants"

export const PageContainer = styled("div")`
	padding: ${PAGE_PADDING};
	padding-top: calc(${TITLE_BANNER_HEIGHT} + ${PAGE_PADDING});
	margin-left: ${SIDEBAR_WIDTH};

	@media (max-width: ${BREAKPOINTS.UP.MD}) {
		margin-left: 0;
	}

	@media (max-width: ${BREAKPOINTS.UP.LG}) {
		padding: ${PAGE_PADDING_MOBILE};
		padding-top: calc(${TITLE_BANNER_HEIGHT} + ${PAGE_PADDING_MOBILE});
	}
`
export const ImageContainer = styled("div")`
	@media (min-width: ${BREAKPOINTS.DOWN.LG}) {
		display: flex;
		gap: ${PAGE_PADDING};
		padding-bottom: ${PAGE_PADDING};
	}
`
