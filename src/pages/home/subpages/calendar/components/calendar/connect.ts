import { connect } from "react-redux"

export const mapStateToProps = (state: any) => {
	return {
		apiError: state.apiError,
		accessToken: state.userData.access_token,
	}
}

export default connect(mapStateToProps)
