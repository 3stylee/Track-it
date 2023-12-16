import React, { useState } from "react"

export const DesktopSort = () => {
	const [selected, setSelected] = useState("Week")

	const handleItemClick = (selectedValue: string) => {
		setSelected(selectedValue)
	}

	return (
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
						className={`dropdown-item ${selected === "Week" ? "active" : ""}`}
						onClick={() => handleItemClick("Week")}>
						Week
					</button>
				</li>
				<li>
					<button
						className={`dropdown-item ${selected === "Month" ? "active" : ""}`}
						onClick={() => handleItemClick("Month")}>
						Month
					</button>
				</li>
			</ul>
		</div>
	)
}
