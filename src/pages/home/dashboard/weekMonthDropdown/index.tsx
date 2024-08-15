import React from "react"
import { SORT_OPTIONS } from "../../../../constants/constants"
import { StyledButton, StyledDropdown } from "./components"

export const WeekMonthDropdown = ({ weekOrMonth, setWeekOrMonth }: any) => {
	const handleItemClick = (selectedValue: string) => {
		if (selectedValue !== weekOrMonth) {
			setWeekOrMonth(selectedValue)
		}
	}
	const isActive = (option: string) => option === weekOrMonth
	return (
		<div className="dropdown">
			<StyledButton data-bs-toggle="dropdown" aria-expanded="false">
				{weekOrMonth}
			</StyledButton>
			<StyledDropdown className="dropdown-menu dropdown-menu-dark">
				{Object.entries(SORT_OPTIONS).map(([, value]) => (
					<li key={value}>
						<button
							className={`dropdown-item ${isActive(value) ? "active" : ""}`}
							onClick={() => handleItemClick(value)}>
							{value}
						</button>
					</li>
				))}
			</StyledDropdown>
		</div>
	)
}
