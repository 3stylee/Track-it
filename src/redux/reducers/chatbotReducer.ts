import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const chatbotReducer = (state = initialState.chatbotExpanded, action: { type: string }): boolean => {
	switch (action.type) {
		case types.OPEN_CHATBOT:
			return true
		case types.CLOSE_CHATBOT:
			return false
		default:
			return state
	}
}

export default chatbotReducer
