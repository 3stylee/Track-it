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
		margin-top: ${({ sidebarExpanded }) => (sidebarExpanded ? "0" : "-300px")};
		z-index: ${({ sidebarExpanded }) => (sidebarExpanded ? "1" : "-1")};
		position: sticky;
		transition: margin-top 0.3s;
	}
`
