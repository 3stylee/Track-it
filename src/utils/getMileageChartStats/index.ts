import { SORT_OPTIONS } from "../../constants/constants"
import { Units } from "../../models/state"
import { getDivisor } from "../getDivisor"

/**
 * Calculates the total and average distance covered in the current week or month, depending on the provided type.
 *
 * @param {number[]} mileageData - An array of data that contains the total distance covered each day or week.
 * @param {string} weekOrMonth - The type of data to calculate. Week or Month.
 * @param {Units} units - The units to be used for the distance.
 *
 * @returns {Object[]} An array of objects that can be used to render the total and average distance covered in the current week or month.
 */
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
