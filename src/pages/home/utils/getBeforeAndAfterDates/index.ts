import { DateRange } from "react-day-picker"

export const getBeforeAndAfterDates = (dateRange: DateRange | undefined) => {
	if (!(dateRange?.from && dateRange?.to)) return { before: undefined, after: undefined }
	const after = dateRange.from.getTime() / 1000
	dateRange.to.setHours(23, 59, 59, 0)
	const before = dateRange.to.getTime() / 1000
	return { before, after }
}
