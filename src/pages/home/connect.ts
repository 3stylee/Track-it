import { connect } from "react-redux"
import { State } from "../../redux/initialState"
import { getAuthToken } from "../../redux/actions/authUserActions"

export const mapStateToProps = (state: State) => {
	return {
		authState: state.authState,
		apiError: state.apiError,
	}
}

export const mapDispatchToProps = {
	getAuthToken,
}

export default connect(mapStateToProps, mapDispatchToProps)
