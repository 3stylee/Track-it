import styled from "@emotion/styled"

export const MenuContainer = styled("div")`
	position: absolute;
	top: 2.875rem;
	right: 0;
	z-index: 2;
	background-color: ${({ theme }) => theme.popup.background};
	border-radius: var(--bs-border-radius);
	box-shadow: ${({ theme }) => theme.popup.boxShadow};
`

export const MenuOption = styled("div")`
	font-size: 0.875rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	gap: 0.5rem;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.sidebar.iconHover};
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
export const DeleteOption = styled(MenuOption)`
	color: var(--bs-danger);
`
