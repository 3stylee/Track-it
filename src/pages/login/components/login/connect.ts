import { connect } from "react-redux"
import { authGoogleUser, authUser } from "../../../../redux/actions/authUserActions"

export const mapStateToProps = (state: any) => {
	return {
		apiCallsInProgress: state.apiCallsInProgress,
		authState: state.authState,
		apiError: state.apiError,
	}
}

export const mapDispatchToProps = {
	authUser,
	authGoogleUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
