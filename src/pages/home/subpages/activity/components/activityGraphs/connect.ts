import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		currentActivityStream: state.currentActivityStream,
	}
}

export default connect(mapStateToProps)
