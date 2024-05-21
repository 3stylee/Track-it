import { connect } from "react-redux"
import { getAuthToken, manualAuthUser } from "../../redux/actions/authUserActions"
import { loadUserData } from "../../redux/actions/userDataActions"

export const mapStateToProps = (state: any) => {
	return {
		authState: state.authState,
		userData: state.userData,
	}
}

export const mapDispatchToProps = {
	loadUserData,
	getAuthToken,
	manualAuthUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
