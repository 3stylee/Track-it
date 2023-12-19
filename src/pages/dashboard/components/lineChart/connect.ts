import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		activityData: state.activityData,
	}
}

export default connect(mapStateToProps)
