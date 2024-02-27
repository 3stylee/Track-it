import { DateRange } from "react-day-picker"

export const getBeforeAndAfterDates = (dateRange: DateRange | undefined) => {
	if (!(dateRange?.from && dateRange?.to)) return { before: undefined, after: undefined }
	const after = dateRange.from.getTime() / 1000
	const before = dateRange.to.getTime() / 1000
	return { before, after }
}
