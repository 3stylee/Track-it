import * as types from "./actionTypes"

export const beginApiCall = () => {
	return { type: types.BEGIN_API_CALL }
}

export const apiCallError = (error: any) => {
	return { type: types.API_CALL_ERROR, data: error }
}
