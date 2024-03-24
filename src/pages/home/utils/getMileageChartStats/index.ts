import { SORT_OPTIONS } from "../../../../constants/constants"
import { Units } from "../../../../models"
import { getDivisor } from "../getDivisor"

export const getMilageChartStats = (mileageData: number[], weekOrMonth: string, units: Units) => {
	const total = mileageData.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)
	const isWeek = weekOrMonth === SORT_OPTIONS.WEEK
	return [
		{
			text: "Total",
			value: total,
			unit: units.unitString,
		},
		{
			text: `${isWeek ? "Daily" : "Weekly"} Average`,
			value: (parseFloat(total) / getDivisor(isWeek)).toFixed(2),
			unit: units.unitString,
		},
	]
}
