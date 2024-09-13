import styled from "@emotion/styled"

export const StyledCard = styled("div")`
	background-color: ${({ theme }) => theme.currentActivity.cardBackground};
	color: ${({ theme }) => theme.text};
	backdrop-filter: ${({ theme }) => theme.currentActivity.cardBlur};
	border: 1px solid var(--bs-border-color-translucent);
	border-radius: var(--bs-border-radius);
	padding: 1rem;
`
