import styled from "@emotion/styled"
import { small } from "."

export const StatsContainer = styled("div")<{ small: small }>`
	display: flex;
	margin: ${({ small }) => (small ? "0" : "0.5rem 1rem 1rem 1rem")};

	& > :first-of-type {
		margin-left: 0;
	}

	& > * {
		margin-left: 1rem;
		padding-right: 1rem;
		border-right: 1px solid ${({ theme }) => theme.text};
	}

	& > :last-child {
		padding-right: 0;
		border: none;
	}
`

export const StatHeader = styled("div")`
	display: flex;
	align-items: center;
`

export const Value = styled("p")<{ small: small }>`
	font-size: ${({ small }) => (small ? "1rem" : "2.25rem")};
	margin-bottom: 0;
`
export const Icon = styled("img")`
	height: 0.75rem;
	margin-left: 0.375rem;
`

export const Text = styled("p")<{ small: small }>`
	font-size: ${({ small }) => (small ? "0.75rem" : "0.875rem")};
	text-transform: capitalize;
	color: #b9ace6;
	margin-bottom: 0;
`

export const Unit = styled("span")<{ small: small }>`
	font-size: ${({ small }) => (small ? "0.75rem" : "1rem")};
	color: #b9ace6;
`
