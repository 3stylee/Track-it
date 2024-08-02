import React from "react"
import { Check } from "react-feather"
import { Activity, PopupContainer } from "./components"

interface DropdownMenuProps {
	selected: string
	options: string[]
	setSelected: (selected: string) => void
}

export const DropdownMenu = ({ selected, options, setSelected }: DropdownMenuProps) => {
	const [showLoading, setShowLoading] = React.useState("")
	const handleClick = (e: React.MouseEvent<HTMLDivElement>, selected: string) => {
		e.preventDefault()
		if (showLoading !== selected) {
			setShowLoading(selected)
			setSelected(selected)
		}
	}
	return (
		<PopupContainer>
			{options.map((value) => {
				const isSelected = value === selected
				return (
					<Activity key={value} selected={isSelected} onClick={(e) => handleClick(e, value)}>
						{value}
						{isSelected && <Check size={16} className="ms-2" />}
						{showLoading === value && showLoading !== selected && (
							<div className="spinner-border spinner-border-sm ms-2" role="status" />
						)}
					</Activity>
				)
			})}
		</PopupContainer>
	)
}
