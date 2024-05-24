import { connect } from "react-redux"

export const mapStateToProps = (state: any) => {
	return {
		apiError: state.apiError,
	}
}

export default connect(mapStateToProps)
