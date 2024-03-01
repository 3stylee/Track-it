import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../../../../constants"

export const PageContainer = styled("div")`
	padding: 2rem 2.5rem;
	margin-top: ${TITLE_BANNER_HEIGHT};
	margin-left: ${SIDEBAR_WIDTH};
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	overflow-y: auto;

	@media (max-width: 768px) {
		margin-left: 0;
		padding: 1.5rem;
	}
`
