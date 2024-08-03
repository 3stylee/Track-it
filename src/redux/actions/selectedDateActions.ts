import * as types from "./actionTypes"

export const updateSelectedDate = (newDate: Date) => {
	return { type: types.UPDATE_SELECTED_DATE, data: newDate }
}

export const resetSelectedDate = () => {
	return { type: types.RESET_SELECTED_DATE }
}
