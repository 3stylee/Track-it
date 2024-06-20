import { connect } from "react-redux"
import { loadUserData } from "../../redux/actions/userDataActions"
import { copyStravaActivities, storeStravaAuth } from "../../redux/actions/stravaActions"

export const mapStateToProps = (state: any) => {
	return {
		userData: state.userData,
	}
}

export const mapDispatchToProps = {
	loadUserData,
	copyStravaActivities,
	storeStravaAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)
