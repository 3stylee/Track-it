import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { getAuthToken } from "../../../../redux/actions/authUserActions"

const mapStateToProps = (state: State) => {
	return {
		authState: state.authState,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	getAuthToken,
}

export default connect(mapStateToProps, mapDispatchToProps)
