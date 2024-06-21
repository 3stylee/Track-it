import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		sessions: state.sessions,
	}
}

export default connect(mapStateToProps)
