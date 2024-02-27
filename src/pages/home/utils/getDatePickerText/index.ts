import { DateRange } from "react-day-picker"
import { format } from "date-fns/format"

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
