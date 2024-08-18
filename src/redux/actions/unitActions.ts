import * as types from "./actionTypes"
import Cookies from "js-cookie"

export const setUnitImperial = () => {
	Cookies.set("unit", "IMPERIAL")
	return { type: types.SET_UNIT_IMPERIAL }
}

export const setUnitMetric = () => {
	Cookies.set("unit", "METRIC")
	return { type: types.SET_UNIT_METRIC }
}
