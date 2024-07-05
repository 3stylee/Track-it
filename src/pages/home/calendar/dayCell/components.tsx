import styled from "@emotion/styled"

export const StyledContainer = styled("div")`
	min-height: 10rem;
	border-bottom: 1px solid ${({ theme }) => theme.calendar.borderColor};
	border-right: 1px solid ${({ theme }) => theme.calendar.borderColor};
	color: ${({ theme }) => theme.bootstrap.textColor};
	background-color: ${({ theme }) => theme.calendar.dayCell};
	padding: 0.125rem;
`
