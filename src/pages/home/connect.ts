import { connect } from "react-redux"
import { manualAuthUser } from "../../redux/actions/authUserActions"
import { loadUserData } from "../../redux/actions/userDataActions"
import { copyStravaActivities, storeStravaAuth } from "../../redux/actions/stravaActions"

export const mapStateToProps = (state: any) => {
	return {
		authState: state.authState,
		userData: state.userData,
	}
}

export const mapDispatchToProps = {
	loadUserData,
	copyStravaActivities,
	manualAuthUser,
	storeStravaAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)
