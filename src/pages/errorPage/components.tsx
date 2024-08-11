import styled from "@emotion/styled"
import { BREAKPOINTS, TITLE_BANNER_HEIGHT } from "../../constants/constants"

export const Container = styled("div")`
	padding: 3rem;
	padding-top: calc(3rem + ${TITLE_BANNER_HEIGHT});

	@media (max-width: ${BREAKPOINTS.UP.SM}) {
		padding: 1rem;
		padding-top: calc(1rem + ${TITLE_BANNER_HEIGHT});
	}
`
