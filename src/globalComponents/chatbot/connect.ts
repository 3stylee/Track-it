import { connect } from "react-redux"
import { State } from "../../redux/initialState"

const mapDispatchToProps = (state: State) => {
	return {
		chatbotExpanded: state.chatbotExpanded,
	}
}

export default connect(mapDispatchToProps)
