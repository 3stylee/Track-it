import * as types from "./actionTypes"

export const openChatbot = () => {
	return { type: types.OPEN_CHATBOT }
}

export const closeChatbot = () => {
	return { type: types.CLOSE_CHATBOT }
}

export const toggleChatbot = () => async (dispatch: any, getState: any) => {
	const chatbotExpanded = getState().chatbotExpanded
	if (chatbotExpanded) {
		dispatch(closeChatbot())
	} else {
		dispatch(openChatbot())
	}
}
