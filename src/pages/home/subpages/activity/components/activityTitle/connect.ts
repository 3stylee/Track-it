import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		currentActivity: state.currentActivity,
	}
}

export default connect(mapStateToProps)
