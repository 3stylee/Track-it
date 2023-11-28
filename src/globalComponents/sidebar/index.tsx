import React from "react"
import { SidebarContainer } from "./components"
import connect from "./connect"

export const Sidebar = ({ sidebarExpanded }: any) => {
	return (
		<SidebarContainer sidebarExpanded={sidebarExpanded} className={`flex-column flex-shrink-0 p-3 text-bg-dark`}>
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<svg className="bi pe-none me-2" width="40" height="32">
					<use xlinkHref="#bootstrap"></use>
				</svg>
				<span className="fs-4">Sidebar</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#home"></use>
						</svg>
						Home
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#speedometer2"></use>
						</svg>
						Dashboard
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#table"></use>
						</svg>
						Orders
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#grid"></use>
						</svg>
						Products
					</a>
				</li>
				<li>
					<a href="#" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#people-circle"></use>
						</svg>
						Customers
					</a>
				</li>
			</ul>
		</SidebarContainer>
	)
}

export default connect(Sidebar)
