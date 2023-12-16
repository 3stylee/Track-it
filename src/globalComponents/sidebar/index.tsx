import React from "react"
import { SidebarContainer } from "./components"
import connect from "./connect"
import { Link } from "react-router-dom"

export const Sidebar = ({ sidebarExpanded }: any) => {
	return (
		<SidebarContainer sidebarExpanded={sidebarExpanded} className={`flex-column flex-shrink-0 p-3 text-bg-dark`}>
			<div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<svg className="bi pe-none me-2" width="40" height="32">
					<use xlinkHref="#bootstrap"></use>
				</svg>
				<span className="fs-4">Sidebar</span>
			</div>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<Link to="" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#home"></use>
						</svg>
						Home
					</Link>
				</li>
				<li>
					<Link to="dashboard" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#speedometer2"></use>
						</svg>
						Dashboard
					</Link>
				</li>
				<li>
					<Link to="" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#table"></use>
						</svg>
						Orders
					</Link>
				</li>
				<li>
					<Link to="" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#grid"></use>
						</svg>
						Products
					</Link>
				</li>
				<li>
					<Link to="" className="nav-link text-white">
						<svg className="bi pe-none me-2" width="16" height="16">
							<use xlinkHref="#people-circle"></use>
						</svg>
						Customers
					</Link>
				</li>
			</ul>
		</SidebarContainer>
	)
}

export default connect(Sidebar)
