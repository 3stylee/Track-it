import React, { useState } from "react"
import { DASHBOARD_SORT_OPTIONS } from "../../../../constants"
import connect from "./connect"
import { SortDiv, SortText } from "./components"

export const DesktopSort = ({ updateSortMetric }: any) => {
	const [selected, setSelected] = useState(DASHBOARD_SORT_OPTIONS.WEEK)

	const handleItemClick = (selectedValue: string) => {
		if (selectedValue !== selected) {
			setSelected(selectedValue)
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
					{selected}
				</button>
				<ul className="dropdown-menu dropdown-menu-dark">
					<li>
						<button
							className={`dropdown-item ${selected === DASHBOARD_SORT_OPTIONS.WEEK ? "active" : ""}`}
							onClick={() => handleItemClick(DASHBOARD_SORT_OPTIONS.WEEK)}>
							{DASHBOARD_SORT_OPTIONS.WEEK}
						</button>
					</li>
					<li>
						<button
							className={`dropdown-item ${selected === DASHBOARD_SORT_OPTIONS.MONTH ? "active" : ""}`}
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
