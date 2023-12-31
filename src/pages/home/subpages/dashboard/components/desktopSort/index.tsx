import React from "react"
import { DASHBOARD_SORT_OPTIONS } from "../../../../../../constants"
import connect from "./connect"
import { SortDiv, SortText } from "./components"

export const DesktopSort = ({ dashboardSortMetric, updateSortMetric }: any) => {
	const handleItemClick = (selectedValue: string) => {
		if (selectedValue !== dashboardSortMetric) {
			updateSortMetric(selectedValue)
		}
	}

	return (
		<SortDiv>
			<SortText>Sort:</SortText>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					{dashboardSortMetric}
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li>
						<button
							className={`dropdown-item ${
								dashboardSortMetric === DASHBOARD_SORT_OPTIONS.WEEK ? "active" : ""
							}`}
							onClick={() => handleItemClick(DASHBOARD_SORT_OPTIONS.WEEK)}>
							{DASHBOARD_SORT_OPTIONS.WEEK}
						</button>
					</li>
					<li>
						<button
							className={`dropdown-item ${
								dashboardSortMetric === DASHBOARD_SORT_OPTIONS.MONTH ? "active" : ""
							}`}
							onClick={() => handleItemClick(DASHBOARD_SORT_OPTIONS.MONTH)}>
							{DASHBOARD_SORT_OPTIONS.MONTH}
						</button>
					</li>
				</ul>
			</div>
		</SortDiv>
	)
}

export default connect(DesktopSort)
