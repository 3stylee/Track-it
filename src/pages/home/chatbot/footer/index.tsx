import { useTheme } from "@emotion/react"
import React from "react"
import { Button, InputGroup } from "react-bootstrap"
import { X } from "react-feather"
import { ClearButton } from "./components"

interface FooterProps {
	inputRef: React.RefObject<HTMLInputElement>
	showClear: boolean
	setMessages: React.Dispatch<React.SetStateAction<any[]>>
	setIndex: React.Dispatch<React.SetStateAction<number>>
	fetchData: () => void
}

export const Footer = ({ inputRef, showClear, setMessages, setIndex, fetchData }: FooterProps) => {
	const theme = useTheme()

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			fetchData()
		}
	}

	return (
		<div className="text-center">
			<ClearButton
				className="my-2 w-25"
				show={showClear}
				onClick={() => {
					setMessages([])
					setIndex(0)
				}}>
				Clear <X size={18} />
			</ClearButton>
			<InputGroup data-bs-theme={theme.name}>
				<input
					type="text"
					className="form-control"
					placeholder="Type your message"
					ref={inputRef}
					onKeyDown={handleKeyPress}
				/>
				<Button className="pe-3" onClick={fetchData}>
					Send
				</Button>
			</InputGroup>
		</div>
	)
}
