import styled from "@emotion/styled"

export const StatsList = styled("ul")`
	list-style: none;
	display: flex;
	padding: 0;
	margin: 0;
	@media (max-width: 768px) {
		margin: 2rem 0;
	}
`
export const Stat = styled("li")`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 0 1rem;
`
export const StatName = styled("span")`
	font-size: 0.75rem;
	${({ theme }) => theme.text};
`
export const StatValue = styled("h3")`
	margin-bottom: 0.25rem;
	color: var(--bs-primary);
`
