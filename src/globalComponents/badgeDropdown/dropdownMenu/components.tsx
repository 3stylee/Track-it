import styled from "@emotion/styled"

export const PopupContainer = styled("div")`
	cursor: pointer;
	position: absolute;
	background-color: ${({ theme }) => theme.athleteActivities.datePickerBackground};
	border: 1px solid rgb(77, 81, 84);
	color: ${({ theme }) => theme.text};
	backdrop-filter: blur(5px);
	border-radius: var(--bs-border-radius);
	z-index: 2;
	right: 0.5rem;
	top: 2.27rem;
`
export const Activity = styled("div")<{ selected: boolean }>`
	display: flex;
	color: ${({ selected }) => (selected ? "white" : "")};
	align-items: center;
	font-size: 0.875rem;
	padding: 0.25rem 0.5rem;
	background-color: ${({ selected }) => (selected ? "var(--bs-primary)" : "transparent")};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme, selected }) => (selected ? "var(--bs-primary)" : theme.sidebar.iconHover)};
	}

	&:first-of-type {
		border-top-left-radius: var(--bs-border-radius);
		border-top-right-radius: var(--bs-border-radius);
	}

	&:last-of-type {
		border-bottom-left-radius: var(--bs-border-radius);
		border-bottom-right-radius: var(--bs-border-radius);
	}
`
