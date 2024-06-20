import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../../../../constants/constants"

export const PageContainer = styled("div")`
	display: flex;
	justify-content: center;
	width: calc(100% - ${SIDEBAR_WIDTH});
	padding: 2rem;
	margin-top: ${TITLE_BANNER_HEIGHT};
	margin-left: ${SIDEBAR_WIDTH};
	height: calc(100vh - ${TITLE_BANNER_HEIGHT});
	overflow-y: auto;
	--fc-button-bg-color: var(--bs-primary);
	--fc-button-hover-bg-color: var(--bs-primary);
	--fc-button-active-bg-color: var(--bs-primary);

	@media (max-width: 768px) {
		margin-left: 0;
		width: 100%;
	}

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
		color: ${({ theme }) => theme.text};
	}

	& .hidden {
		display: none;
	}

	& .calendar {
		padding: 1rem 2rem 4rem 2rem;
	}

	& .fc-view {
		background-color: var(--bs-${({ theme }) => theme.bootstrap.background});
	}

	& .fc-col-header-cell {
		background-color: ${({ theme }) => theme.background};
	}

	& .fc-scrollgrid,
	.fc-theme-standard td,
	.fc-theme-standard th {
		border-color: ${({ theme }) => theme.calendar.gridColor};
	}
`
export const SpinnerContainer = styled("div")`
	width: 4rem;
	height: 4rem;
	background: ${({ theme }) => theme.spinnerBackground};
	border-radius: var(--bs-border-radius);
	padding: 1rem;
	padding-right: 1.1rem;
	position: fixed;
	top: calc(50%);
	left: calc(50% - 2rem);
	z-index: 2;
`
