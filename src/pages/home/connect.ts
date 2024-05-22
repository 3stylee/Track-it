import { connect } from "react-redux"
import { manualAuthUser } from "../../redux/actions/authUserActions"
import { loadUserData } from "../../redux/actions/userDataActions"

export const mapStateToProps = (state: any) => {
	return {
		authState: state.authState,
		userData: state.userData,
	}
}

export const mapDispatchToProps = {
	loadUserData,
	manualAuthUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
