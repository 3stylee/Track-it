import { connect } from "react-redux"
import { logoutUser } from "../../redux/actions/stravaActions"
import { APPLICATION_ERRORS } from "../../constants/constants"

export const mapStateToProps = (state: any) => {
	const apiError = state.apiError.message
	const backButton =
		Object.values(APPLICATION_ERRORS).includes(apiError) && apiError !== APPLICATION_ERRORS.USER_DATA_ERROR
	return {
		apiError,
		backButton,
	}
}

const mapDispatchToProps = {
	logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
