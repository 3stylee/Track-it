import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const CentralContainer = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	padding-top: ${TITLE_BANNER_HEIGHT};
`
