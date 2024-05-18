// hacky solution but full calendar doesn't like react state or redux
/**
 * Toggles the visibility of a loading spinner and the blur effect on a calendar based on whether data is loading.
 *
 * @param {boolean} isLoading - A boolean indicating whether data is loading.
 * @param {React.RefObject<HTMLDivElement>} spinnerRef - A React ref object pointing to the loading spinner element.
 * @param {React.RefObject<HTMLDivElement>} calendarRef - A React ref object pointing to the calendar element.
 *
 * If isLoading is true, the "hidden" class is removed from the spinner and the "blur" class is added to the calendar. If isLoading is false, the "hidden" class is added to the spinner and the "blur" class is removed from the calendar.
 */
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
