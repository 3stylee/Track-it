import styled from "@emotion/styled"
import { THEMES, TITLE_BANNER_HEIGHT } from "../../constants"

export const PageContainer = styled("div")`
	padding-top: ${TITLE_BANNER_HEIGHT};
	display: flex;
	height: 100vh;
	background-color: ${({ theme }) => (theme === THEMES.LIGHT ? "#fbf7f5" : "#0b1623")};

	@media (max-width: 768px) {
		display: block;
		height: 100%;
	}
`
