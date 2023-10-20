import { DataContainer } from "."
import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		data: state.data,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

export default connect(mapStateToProps)(DataContainer)
