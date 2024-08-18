import React, { useEffect, useRef, useState } from "react"
import { BadgeChevron, StyledBadge } from "./components"
import { addPopupListeners } from "../../utils/addPopupListeners"
import DropdownMenu from "./dropdownMenu"

interface BadgeDropdownProps {
	selected: string
	options: string[]
	showBadge?: boolean
	setSelected: (selected: string) => void
}

export const BadgeDropdown = ({ showBadge = true, selected, options, setSelected }: BadgeDropdownProps) => {
	const dropdownRef = useRef<HTMLDivElement | null>(null)
	const badgeRef = useRef<HTMLDivElement | null>(null)
	const [showDropdown, setShowDropdown] = useState(false)

	useEffect(() => {
		const cleanupFunction = addPopupListeners(dropdownRef, setShowDropdown, badgeRef)
		return () => {
			cleanupFunction()
		}
	}, [])

	useEffect(() => {
		if (!options.includes(selected)) {
			setSelected(options[0])
		}
	}, [])

	const handleBadgeClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault()
		setShowDropdown(!showDropdown)
	}

	return (
		<>
			<StyledBadge onClick={handleBadgeClick} ref={badgeRef} showBadge={showBadge}>
				{selected}
				<BadgeChevron size={16} className="badge-chevron" showDropdown={showDropdown} />
			</StyledBadge>
			<div ref={dropdownRef}>
				{showDropdown && <DropdownMenu selected={selected} setSelected={setSelected} options={options} />}
			</div>
		</>
	)
}
