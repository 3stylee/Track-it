/**
 * Adds event listeners for a date picker component.
 *
 * @param {React.RefObject<HTMLDivElement>} wrapperRef - A reference to the wrapper element.
 * @param {(isOpen: boolean) => void} setIsOpen - A function to set whether the date picker is open.
 * @param {React.RefObject<HTMLDivElement>} [badgeRef] - An optional reference to the badge element.
 *
 * @returns {() => void} A function that removes the "mousedown" event listener from the document.
 */
export const addPopupListeners = (
	wrapperRef: React.RefObject<HTMLDivElement>,
	setIsOpen: (isOpen: boolean) => void,
	badgeRef?: React.RefObject<HTMLDivElement>
) => {
	const handleClickOutside = (event: any) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			if (badgeRef && badgeRef.current && badgeRef.current.contains(event.target)) {
				return
			}
			setIsOpen(false)
		}
	}

	document.addEventListener("mousedown", handleClickOutside)
	return () => {
		document.removeEventListener("mousedown", handleClickOutside)
	}
}
