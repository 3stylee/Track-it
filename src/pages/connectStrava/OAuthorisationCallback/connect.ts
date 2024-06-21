import { connect } from "react-redux"
import { State } from "../../../redux/initialState"
import { storeStravaAuth } from "../../../redux/actions/stravaActions"

const mapStateToProps = (state: State) => {
	return {
		userData: state.userData,
		apiError: state.apiError,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	storeStravaAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)
