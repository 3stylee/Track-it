import React, { useEffect } from "react"
import { Check } from "react-feather"
import { Activity, PopupContainer } from "./components"
import connect from "./connect"

interface DropdownMenuProps {
	selected: string
	options: string[]
	error: boolean
	clearError: () => void
	setSelected: (selected: string) => void
}

const DropdownMenu = ({ selected, options, error, clearError, setSelected }: DropdownMenuProps) => {
	const [showLoading, setShowLoading] = React.useState("")

	useEffect(() => {
		if (error) {
			setShowLoading("")
			// TODO: show error toast
			clearError()
		}
	}, [error])

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

export default connect(DropdownMenu)
