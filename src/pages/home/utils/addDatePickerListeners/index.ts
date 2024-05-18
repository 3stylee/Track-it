/**
 * Adds event listeners for a date picker component.
 *
 * @param {React.RefObject<HTMLDivElement | null>} containerRef - A reference to the container element.
 * @param {React.RefObject<HTMLDivElement>} wrapperRef - A reference to the wrapper element.
 * @param {boolean} isOpen - A boolean indicating whether the date picker is open.
 * @param {(topPos: number) => void} setTopPos - A function to set the top position of the date picker.
 * @param {(isOpen: boolean) => void} setIsOpen - A function to set whether the date picker is open.
 *
 * @returns {() => void} A function that removes the "mousedown" event listener from the document.
 */
export const addDatePickerListeners = (
	containerRef: React.RefObject<HTMLDivElement | null>,
	wrapperRef: React.RefObject<HTMLDivElement>,
	isOpen: boolean,
	setTopPos: (topPos: number) => void,
	setIsOpen: (isOpen: boolean) => void
) => {
	const handleClickOutside = (event: any) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setIsOpen(false)
		}
	}
	const handleScroll = () => {
		if (isOpen) setIsOpen(false)
		setTopPos(containerRef.current?.scrollTop || 0)
	}

	document.addEventListener("mousedown", handleClickOutside)
	containerRef.current?.addEventListener("scroll", handleScroll)
	return () => {
		document.removeEventListener("mousedown", handleClickOutside)
	}
}
