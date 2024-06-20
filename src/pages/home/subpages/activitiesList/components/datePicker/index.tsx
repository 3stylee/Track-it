import React, { useRef, useEffect, useState } from "react"
import { DateRange } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { ButtonText, ClearButton, Container, FilterButtonContainer, Footer, StyledDayPicker } from "./components"
import { Button } from "react-bootstrap"
import FeatherIcon from "feather-icons-react"
import { addDatePickerListeners } from "../../../../utils/addDatePickerListeners"
import { getDatePickerText } from "../../../../utils/getDatePickerText"
import { CLEAR_FILTER, FILTER_RESULTS, SELECT_DATE_RANGE } from "../../../../../../constants/constants"

interface DatePickerProps {
	onClick: (dates: DateRange | undefined) => void
	containerRef: React.RefObject<HTMLDivElement | null>
	selected: DateRange | undefined
	setSelected: (dates: DateRange) => void
	clearFilter: () => void
	filterApplied: boolean
	setFilterApplied: (value: boolean) => void
}

export const DatePicker = ({
	onClick,
	containerRef,
	selected,
	setSelected,
	clearFilter,
	filterApplied,
	setFilterApplied,
}: DatePickerProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrollHeight, setScrollHeight] = useState(0)
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
						{filterApplied ? footerText : FILTER_RESULTS}
						<FeatherIcon icon="calendar" size={18} />
					</ButtonText>
				</Button>
				{filterApplied && (
					<ClearButton
						onClick={() => {
							setIsOpen(false)
							setFilterApplied(false)
							setSelected({ from: undefined, to: undefined })
							clearFilter()
						}}>
						{CLEAR_FILTER}
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
							if (dates) setSelected(dates)
						}}
						footer={
							<Footer>
								{footerText || SELECT_DATE_RANGE}
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
