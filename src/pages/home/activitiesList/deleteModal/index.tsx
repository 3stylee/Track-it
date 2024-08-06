import { useTheme } from "@emotion/react"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { StyledModal } from "./components"
import connect from "./connect"
import { DELETE_ACTIVITY_CONFIRMATION } from "../../../../constants/constants"

interface DeleteModalProps {
	id: number
	show: boolean
	setShowDelete: (showDelete: boolean) => void
	deleteAthleteActivity: (id: number) => void
}

const DeleteModal = ({ id, show, setShowDelete, deleteAthleteActivity }: DeleteModalProps) => {
	const theme = useTheme()
	const [showLoading, setShowLoading] = useState(false)
	const handleClose = () => {
		setShowDelete(false)
	}

	return (
		<StyledModal show={show} onHide={handleClose} centered data-bs-theme={theme.bootstrap.background}>
			<Modal.Header closeButton>
				<Modal.Title>Delete Activity</Modal.Title>
			</Modal.Header>
			<Modal.Body>{DELETE_ACTIVITY_CONFIRMATION}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Cancel
				</Button>
				<Button
					variant="danger"
					disabled={showLoading}
					onClick={() => {
						deleteAthleteActivity(id)
						setShowLoading(true)
					}}>
					Delete Activity
					{showLoading && <div className="spinner-border spinner-border-sm ms-2" role="status" />}
				</Button>
			</Modal.Footer>
		</StyledModal>
	)
}

export default connect(DeleteModal)
