import styled from "@emotion/styled"
import { THEMES } from "../../../../../../constants"

export const PageContainer = styled("div")`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2rem;
	overflow-y: scroll;
`
export const CalendarContainer = styled("div")`
	width: 90%;

	& a {
		text-decoration: none;
	}

	& a,
	h2 {
		color: ${({ theme }) => (theme === THEMES.DARK ? "white" : "black")};
	}

	& .hidden {
		display: none;
	}
`
