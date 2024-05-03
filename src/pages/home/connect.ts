import { connect } from "react-redux"
import { State } from "../../redux/initialState"
import { authUserSuccess, getAuthToken } from "../../redux/actions/authUserActions"

export const mapStateToProps = (state: State) => {
	return {
		authState: state.authState,
	}
}

export const mapDispatchToProps = {
	getAuthToken,
	authUserSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)
