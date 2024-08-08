import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const CentralContainer = styled("div")<{ backgroundImage: any }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: ${TITLE_BANNER_HEIGHT};
	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-size: cover;
`
