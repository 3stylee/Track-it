import styled from "@emotion/styled"

export const CenteredDiv = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`
export const StyledCard = styled("div")`
	background-color: ${({ theme }) => theme.currentActivity.cardBackground};
	color: ${({ theme }) => theme.text};
	backdrop-filter: ${({ theme }) => theme.currentActivity.cardBlur};
	border-radius: var(--bs-border-radius);
	padding: 1rem;
`
