import React, { useRef, useEffect, useState } from "react"
import { DateRange } from "react-day-picker"
import "react-day-picker/dist/style.css"
import {
	ButtonText,
	ClearButton,
	Container,
	FilterButtonContainer,
	Footer,
	StyledButton,
	StyledDayPicker,
} from "./components"
import { Button } from "react-bootstrap"
import { addPopupListeners } from "../../../../utils/addPopupListeners"
import { getDatePickerText } from "../../../../utils/getDatePickerText"
import { CLEAR_FILTER, FILTER_RESULTS, SELECT_DATE_RANGE } from "../../../../constants/constants"
import { Calendar, X } from "react-feather"

interface DatePickerProps {
	loading: boolean
	onClick: (dates: DateRange | undefined) => void
	selected: DateRange | undefined
	setSelected: (dates: DateRange) => void
	clearFilter: () => void
	filterApplied: boolean
	setFilterApplied: (value: boolean) => void
	firstActivityDate: string | undefined
}

export const DatePicker = ({
	loading,
	onClick,
	selected,
	setSelected,
	clearFilter,
	filterApplied,
	setFilterApplied,
	firstActivityDate,
}: DatePickerProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const footerText = getDatePickerText(selected)

	useEffect(() => {
		const cleanupFunction = addPopupListeners(wrapperRef, setIsOpen)
		return () => {
			cleanupFunction()
		}
	}, [wrapperRef, isOpen])

	return (
		<div ref={wrapperRef}>
			<FilterButtonContainer>
				<StyledButton onClick={() => setIsOpen(!isOpen)} disabled={loading}>
					<ButtonText>
						{filterApplied ? footerText : FILTER_RESULTS}
						<Calendar size={18} />
					</ButtonText>
				</StyledButton>
				{filterApplied && (
					<ClearButton
						onClick={() => {
							setIsOpen(false)
							setFilterApplied(false)
							setSelected({ from: undefined, to: undefined })
							clearFilter()
						}}>
						{CLEAR_FILTER}
						<X size={18} />
					</ClearButton>
				)}
			</FilterButtonContainer>
			{isOpen && (
				<Container>
					<StyledDayPicker
						mode="range"
						captionLayout="dropdown-buttons"
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
						fromDate={new Date(firstActivityDate || new Date())}
						toDate={new Date()}
					/>
				</Container>
			)}
		</div>
	)
}
