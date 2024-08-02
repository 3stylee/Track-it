import styled from "@emotion/styled"

export const PopupContainer = styled("div")`
	position: absolute;
	background-color: #0b1623;
	border: 1px solid rgb(77, 81, 84);
	color: white;
	border-radius: var(--bs-border-radius);
	z-index: 2;
	right: 0.5rem;
	top: 2.27rem;
`
export const Activity = styled("div")<{ selected: boolean }>`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	padding: 0.25rem 0.5rem;
	background-color: ${({ selected }) => (selected ? "var(--bs-primary)" : "transparent")};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ selected }) => (selected ? "var(--bs-primary)" : "rgba(255, 255, 255, 0.15)")};
	}
`
