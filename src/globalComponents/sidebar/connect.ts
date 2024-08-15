import { connect } from "react-redux"
import { State } from "../../redux/initialState"
import { toggleChatbot } from "../../redux/actions/chatbotActions"

export const mapStateToProps = (state: State) => {
	return {
		sidebarExpanded: state.sidebarExpanded,
	}
}

const mapDispatchToProps = {
	toggleChatbot,
}

export default connect(mapStateToProps, mapDispatchToProps)
