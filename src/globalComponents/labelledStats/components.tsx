import styled from "@emotion/styled"
import { small } from "."

export const StatsContainer = styled("div")<{ small: small }>`
	display: flex;
	margin: ${({ small }) => (small ? "0" : "0.5rem 1rem 1rem 1rem")};

	& > :first-of-type {
		margin-left: 0;
	}

	& > * {
		margin-left: ${({ small }) => (small ? "0.5rem" : "1rem")};
		padding-right: ${({ small }) => (small ? "0.5rem" : "1rem")};
		border-right: 1px solid ${({ theme }) => theme.labelledStats.divider};
	}

	& > :last-child {
		padding-right: 0;
		border: none;
	}
`

export const StatHeader = styled("div")`
	display: flex;
	color: ${({ theme }) => theme.labelledStats.accent};
	align-items: center;
`

export const Value = styled("p")<{ small: small }>`
	font-size: ${({ small }) => (small ? "0.875rem" : "2.25rem")};
	margin-bottom: 0;

	@media (max-width: 575px) {
		font-size: ${({ small }) => (small ? "1rem" : "1.25rem")};
	}
`

export const Text = styled("p")<{ small: small }>`
	font-size: ${({ small }) => (small ? "0.625rem" : "0.875rem")};
	text-transform: capitalize;
	margin-bottom: 0;
`

export const Unit = styled("span")<{ small: small }>`
	font-size: ${({ small }) => (small ? "0.5rem" : "1rem")};
	color: ${({ theme }) => theme.labelledStats.accent};
	text-transform: uppercase;

	@media (max-width: 575px) {
		font-size: 0.75rem;
	}
`
