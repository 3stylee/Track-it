import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	padding: 1.5rem 2.5rem;
	padding-top: calc(${TITLE_BANNER_HEIGHT} + 1.5rem);
	margin-left: ${SIDEBAR_WIDTH};

	@media (max-width: 768px) {
		margin-left: 0;
	}

	@media (max-width: 991px) {
		padding-top: calc(${TITLE_BANNER_HEIGHT} + 1.5rem);
		padding: 1.5rem;
	}
`
export const ImageContainer = styled("div")`
	@media (min-width: 992px) {
		display: flex;
		gap: 1.5rem;
		padding-bottom: 1.5rem;
	}
`
