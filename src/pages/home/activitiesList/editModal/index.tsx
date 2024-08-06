import React from "react"
import { Modal } from "react-bootstrap"

interface EditModalProps {
	id: number
	show: boolean
	setShowEdit: (showEdit: boolean) => void
}

export const EditModal = ({ id, show, setShowEdit }: EditModalProps) => {
	const handleClose = () => {
		setShowEdit(false)
	}

	return (
		<Modal show={show} onHide={handleClose} centered>
			{id}
		</Modal>
	)
}
