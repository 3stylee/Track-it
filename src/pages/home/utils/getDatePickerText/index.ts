import { DateRange } from "react-day-picker"
import { format } from "date-fns/format"

/**
 * Formats the selected date range from a date picker into a string.
 *
 * @param {DateRange | undefined} selected - The selected date range from the date picker. It should have a from and to date.
 *
 * @returns {string | undefined} A string representing the selected date range in the format "dd/MM/yy – dd/MM/yy".
 */
export const getDatePickerText = (selected: DateRange | undefined) => {
	let footerText
	if (selected?.from) {
		if (!selected.to) {
			footerText = format(selected.from, "dd/MM/yy")
		} else if (selected.to) {
			footerText = format(selected.from, "dd/MM/yy") + " – " + format(selected.to, "dd/MM/yy")
		}
	}
	return footerText
}
