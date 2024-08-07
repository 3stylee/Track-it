import styled from "@emotion/styled"

export const DrawerContainer = styled("div")`
	margin-top: 1rem;
	border-top: 1px solid ${({ theme }) => theme.calendar.borderColor};
	padding-top: 2rem;
`
export const CenterContainer = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`
