import React from "react"
import { Activity, PopupContainer } from "./components"
import { ACTIVITY_TYPES } from "../../../../constants/constants"
import { Check } from "react-feather"
import connect from "./connect"

interface SelectActivityTypeProps {
	selected: string
	id: number
	updateActivityType: (id: number, type: string) => void
}

const SelectActivityType = ({ selected, id, updateActivityType }: SelectActivityTypeProps) => {
	const [showLoading, setShowLoading] = React.useState("")
	const handleClick = (e: React.MouseEvent<HTMLDivElement>, type: string) => {
		e.preventDefault()
		if (showLoading !== type) {
			setShowLoading(type)
			updateActivityType(id, type)
		}
	}
	return (
		<PopupContainer>
			{ACTIVITY_TYPES.map((type) => {
				const isSelected = type === selected
				return (
					<Activity key={type} selected={isSelected} onClick={(e) => handleClick(e, type)}>
						{type}
						{isSelected && <Check size={16} className="ms-2" />}
						{showLoading === type && showLoading !== selected && (
							<div className="spinner-border spinner-border-sm ms-2" role="status" />
						)}
					</Activity>
				)
			})}
		</PopupContainer>
	)
}

export default connect(SelectActivityType)
