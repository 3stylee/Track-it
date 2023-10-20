import { connect } from "react-redux"
import { OAuthorisationCallback } from "."
import { State } from "../../../../redux/initialState"
import { getAuthToken, authUserSuccess } from "../../../../redux/actions/authUserActions"

const mapStateToProps = (state: State) => {
	return {
		authState: state.authState,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	getAuthToken,
	authUserSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(OAuthorisationCallback)
