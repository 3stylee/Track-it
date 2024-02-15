import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		currentActivity: state.currentActivity,
		units: state.units,
	}
}

export default connect(mapStateToProps)
