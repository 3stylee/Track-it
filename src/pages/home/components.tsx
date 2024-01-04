import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../constants"

export const PageContainer = styled("div")`
	margin-top: ${TITLE_BANNER_HEIGHT};
	display: flex;
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	background-color: #fbf7f5;

	@media (max-width: 768px) {
		display: block;
		height: 100%;
	}
`
