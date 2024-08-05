import React, { useEffect, useRef } from "react"
import { addPopupListeners } from "../../../../utils/addPopupListeners"
import { DeleteOption, MenuContainer, MenuOption } from "./components"
import { Edit2, Trash2 } from "react-feather"

interface MoreMenuProps {
	buttonRef: React.RefObject<HTMLDivElement> | undefined
	setShowMenu: (showMenu: boolean) => void
}

export const MoreMenu = ({ buttonRef, setShowMenu }: MoreMenuProps) => {
	const menuRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const cleanupFunction = addPopupListeners(menuRef, setShowMenu, buttonRef)
		return () => {
			cleanupFunction()
		}
	}, [])

	return (
		<MenuContainer ref={menuRef}>
			<MenuOption>
				<Edit2 size={16} />
				Edit
			</MenuOption>
			<DeleteOption>
				<Trash2 size={16} />
				Delete
			</DeleteOption>
		</MenuContainer>
	)
}
