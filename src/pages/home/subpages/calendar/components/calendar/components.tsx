import styled from "@emotion/styled"
import { THEMES } from "../../../../../../constants"

export const PageContainer = styled("div")`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2rem;
	overflow-y: scroll;

	& .blur {
		filter: blur(2px);
	}
`
export const CalendarContainer = styled("div")`
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

	& .calendar {
		padding: 1rem 2rem 4rem 2rem;
	}
`
export const SpinnerContainer = styled("div")`
	width: 4rem;
	height: 4rem;
	background: ${({ theme }) => (theme === THEMES.DARK ? "white" : "black")};
	border-radius: var(--bs-border-radius);
	padding: 1rem;
	padding-right: 1.1rem;
	position: fixed;
	top: calc(50%);
	left: calc(50% - 2rem);
	z-index: 2;
`
