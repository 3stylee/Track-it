import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../constants/constants"

export const ApiErrorContainer = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	color: ${({ theme }) => theme.text};
`
