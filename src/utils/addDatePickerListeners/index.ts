/**
 * Adds event listeners for a date picker component.
 *
 * @param {React.RefObject<HTMLDivElement>} wrapperRef - A reference to the wrapper element.
 * @param {(isOpen: boolean) => void} setIsOpen - A function to set whether the date picker is open.
 *
 * @returns {() => void} A function that removes the "mousedown" event listener from the document.
 */
export const addDatePickerListeners = (
	wrapperRef: React.RefObject<HTMLDivElement>,
	setIsOpen: (isOpen: boolean) => void
) => {
	const handleClickOutside = (event: any) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setIsOpen(false)
		}
	}

	document.addEventListener("mousedown", handleClickOutside)
	return () => {
		document.removeEventListener("mousedown", handleClickOutside)
	}
}
