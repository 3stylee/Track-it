import * as types from "./actionTypes"

export const setUnitImperial = () => {
	return { type: types.SET_UNIT_IMPERIAL }
}

export const setUnitMetric = () => {
	return { type: types.SET_UNIT_METRIC }
}
