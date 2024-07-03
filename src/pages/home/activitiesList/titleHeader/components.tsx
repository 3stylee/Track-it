import styled from "@emotion/styled"

export const Filters = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	flex-wrap: wrap;

	@media (max-width: 767px) {
		padding: 1rem;
		padding-left: 1.25rem;
	}
`
export const Title = styled("h3")`
	margin: 0;
	color: ${({ theme }) => theme.text};
`
