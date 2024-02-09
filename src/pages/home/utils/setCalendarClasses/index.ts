// hacky solution but full calendar doesn't like react state or redux
export const setCalendarClasses = (
	isLoading: boolean,
	spinnerRef: React.RefObject<HTMLDivElement>,
	calendarRef: React.RefObject<HTMLDivElement>
) => {
	if (isLoading) {
		spinnerRef.current?.classList.remove("hidden")
		calendarRef.current?.classList.add("blur")
	} else {
		spinnerRef.current?.classList.add("hidden")
		calendarRef.current?.classList.remove("blur")
	}
}
