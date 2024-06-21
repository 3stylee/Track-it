import styled from "@emotion/styled"

export const Container = styled("div")`
	padding: 0 2rem 2rem 2rem;
	@media (max-width: 991px) {
		padding: 0rem 0.75rem;
	}
`

export const PageTitle = styled("h3")`
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.text};
`
export const SessionCount = styled("p")`
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.text};
`
