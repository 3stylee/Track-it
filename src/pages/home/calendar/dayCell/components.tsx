import styled from "@emotion/styled"

export const StyledContainer = styled("div")`
	min-height: 10rem;
	border-bottom: 1px solid ${({ theme }) => theme.calendar.borderColor};
	border-right: 1px solid ${({ theme }) => theme.calendar.borderColor};
	color: ${({ theme }) => theme.bootstrap.textColor};
	background-color: ${({ theme }) => theme.calendar.dayCell};
	padding: 0.125rem;
	position: relative;
`
export const DayNumber = styled("div")`
	margin-left: 0.125rem;
`
export const ShowMore = styled("span")`
	font-size: 0.875rem;
	cursor: pointer;
	border-radius: var(--bs-border-radius);
	padding: 0.25rem;

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
	}
`
