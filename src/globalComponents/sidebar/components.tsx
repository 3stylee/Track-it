import styled from "@emotion/styled"

interface SidebarContainerProps {
	sidebarExpanded: boolean
}

export const SidebarContainer = styled("div")<SidebarContainerProps>`
	width: 300px;
	margin-left: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : "-300px")};
	transition: margin-left 0.3s;

	@media (max-width: 992px) {
		width: 100%;
		margin-left: 0;
		height: 300px;
		margin-bottom: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : "-300px")};
		z-index: -1;
		transition: margin-bottom 0.3s;
		position: sticky;
	}
`
