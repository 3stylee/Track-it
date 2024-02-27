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
