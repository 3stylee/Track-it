import React, { useEffect, useRef } from "react"
import { addPopupListeners } from "../../../../utils/addPopupListeners"
import { DeleteOption, MenuContainer, MenuOption } from "./components"
import { Edit2, Trash2 } from "react-feather"

interface MoreMenuProps {
	buttonRef: React.RefObject<HTMLDivElement> | undefined
	id: number
	setShowMenu: (showMenu: boolean) => void
	setShowDelete: (showDelete: boolean) => void
	setShowEdit: (showEdit: boolean) => void
}

export const MoreMenu = ({ buttonRef, setShowMenu, setShowDelete, setShowEdit }: MoreMenuProps) => {
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const cleanupFunction = addPopupListeners(menuRef, setShowMenu, buttonRef)
		return () => {
			cleanupFunction()
		}
	}, [])

	const handleDelete = (e: React.MouseEvent) => {
		e.preventDefault()
		setShowDelete(true)
		setShowMenu(false)
	}

	const handleEdit = (e: React.MouseEvent) => {
		e.preventDefault()
		setShowEdit(true)
		setShowMenu(false)
	}

	return (
		<>
			<MenuContainer ref={menuRef}>
				<MenuOption onClick={handleEdit}>
					<Edit2 size={16} />
					Edit
				</MenuOption>
				<DeleteOption onClick={handleDelete}>
					<Trash2 size={16} />
					Delete
				</DeleteOption>
			</MenuContainer>
		</>
	)
}
