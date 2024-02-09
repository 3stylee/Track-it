import React from "react"
import { SORT_OPTIONS } from "../../../../../../constants"

export const DesktopSort = ({ weekOrMonth, setWeekOrMonth }: any) => {
	const handleItemClick = (selectedValue: string) => {
		if (selectedValue !== weekOrMonth) {
			setWeekOrMonth(selectedValue)
		}
	}
	const isWeek = weekOrMonth === SORT_OPTIONS.WEEK

	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				{weekOrMonth}
			</button>
			<ul className="dropdown-menu dropdown-menu-dark">
				<li>
					<button
						className={`dropdown-item ${isWeek ? "active" : ""}`}
						onClick={() => handleItemClick(SORT_OPTIONS.WEEK)}>
						{SORT_OPTIONS.WEEK}
					</button>
				</li>
				<li>
					<button
						className={`dropdown-item ${!isWeek ? "active" : ""}`}
						onClick={() => handleItemClick(SORT_OPTIONS.MONTH)}>
						{SORT_OPTIONS.MONTH}
					</button>
				</li>
			</ul>
		</div>
	)
}
