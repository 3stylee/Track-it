import React, { useEffect } from "react"
import { Check } from "react-feather"
import { Activity, PopupContainer } from "./components"
import connect from "./connect"

interface DropdownMenuProps {
	selected: string
	options: string[]
	errorStatus: number
	setSelected: (selected: string) => void
}

export const DropdownMenu = ({ selected, options, errorStatus, setSelected }: DropdownMenuProps) => {
	const [showLoading, setShowLoading] = React.useState("")

	useEffect(() => {
		setShowLoading("")
	}, [errorStatus, selected])

	const handleClick = (e: React.MouseEvent<HTMLDivElement>, newSelected: string) => {
		e.preventDefault()
		if (showLoading !== selected && newSelected !== selected) {
			setShowLoading(newSelected)
			setSelected(newSelected)
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

export default connect(DropdownMenu)
