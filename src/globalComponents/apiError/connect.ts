import { connect } from "react-redux"

export const mapStateToProps = (state: any) => {
	return {
		apiError: state.apiError.message,
	}
}

export default connect(mapStateToProps)
