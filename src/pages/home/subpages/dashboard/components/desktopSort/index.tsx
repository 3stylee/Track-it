import React from "react"
import { WEEK_OR_MONTH } from "../../../../../../constants"

export const DesktopSort = ({ weekOrMonth, setWeekOrMonth }: any) => {
	const handleItemClick = (selectedValue: string) => {
		if (selectedValue !== weekOrMonth) {
			setWeekOrMonth(selectedValue)
		}
	}

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
						className={`dropdown-item ${weekOrMonth === WEEK_OR_MONTH.WEEK ? "active" : ""}`}
						onClick={() => handleItemClick(WEEK_OR_MONTH.WEEK)}>
						{WEEK_OR_MONTH.WEEK}
					</button>
				</li>
				<li>
					<button
						className={`dropdown-item ${weekOrMonth === WEEK_OR_MONTH.MONTH ? "active" : ""}`}
						onClick={() => handleItemClick(WEEK_OR_MONTH.MONTH)}>
						{WEEK_OR_MONTH.MONTH}
					</button>
				</li>
			</ul>
		</div>
	)
}
