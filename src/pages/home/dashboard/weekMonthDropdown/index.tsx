import React from "react"
import { SORT_OPTIONS } from "../../../../constants/constants"

export const WeekMonthDropdown = ({ weekOrMonth, setWeekOrMonth }: any) => {
	const handleItemClick = (selectedValue: string) => {
		if (selectedValue !== weekOrMonth) {
			setWeekOrMonth(selectedValue)
		}
	}
	const isActive = (option: string) => option === weekOrMonth
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
				{Object.entries(SORT_OPTIONS).map(([, value]) => (
					<li key={value}>
						<button
							className={`dropdown-item ${isActive(value) ? "active" : ""}`}
							onClick={() => handleItemClick(value)}>
							{value}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
