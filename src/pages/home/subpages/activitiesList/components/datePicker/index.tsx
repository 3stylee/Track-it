import React, { useRef, useEffect, useState } from "react"
import { DateRange } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { ButtonText, ClearButton, Container, FilterButtonContainer, Footer, StyledDayPicker } from "./components"
import { Button } from "react-bootstrap"
import FeatherIcon from "feather-icons-react"
import { addDatePickerListeners } from "../../../../utils/addDatePickerListeners"
import { getDatePickerText } from "../../../../utils/getDatePickerText"

interface DatePickerProps {
	onClick: (dates: DateRange | undefined) => void
	containerRef: React.RefObject<HTMLDivElement | null>
	selected: DateRange | undefined
	setSelected: (dates: DateRange | undefined) => void
	clearFilter: () => void
}

export const DatePicker = ({ onClick, containerRef, selected, setSelected, clearFilter }: DatePickerProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrollHeight, setScrollHeight] = useState(0)
	const [filterApplied, setFilterApplied] = useState(false)
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const footerText = getDatePickerText(selected)

	useEffect(() => {
		const cleanupFunction = addDatePickerListeners(containerRef, wrapperRef, isOpen, setScrollHeight, setIsOpen)
		return () => {
			cleanupFunction()
		}
	}, [wrapperRef, containerRef, isOpen])

	return (
		<div ref={wrapperRef}>
			<FilterButtonContainer>
				<Button onClick={() => setIsOpen(!isOpen)}>
					<ButtonText>
						{filterApplied ? footerText : "Filter by date"}
						<FeatherIcon icon="calendar" size={18} />
					</ButtonText>
				</Button>
				{filterApplied && (
					<ClearButton
						onClick={() => {
							setIsOpen(false)
							setFilterApplied(false)
							setSelected(undefined)
							clearFilter()
						}}>
						Clear Filter
						<FeatherIcon icon="x" size={18} />
					</ClearButton>
				)}
			</FilterButtonContainer>
			{isOpen && (
				<Container top={scrollHeight}>
					<StyledDayPicker
						mode="range"
						selected={selected}
						onSelect={(dates) => {
							setSelected(dates)
						}}
						footer={
							<Footer>
								{footerText || "Select a date range"}
								<Button
									disabled={!(selected?.from && selected?.to)}
									onClick={() => {
										onClick(selected)
										setFilterApplied(true)
										setIsOpen(false)
									}}>
									Apply
								</Button>
							</Footer>
						}
						toDate={new Date()}
					/>
				</Container>
			)}
		</div>
	)
}
