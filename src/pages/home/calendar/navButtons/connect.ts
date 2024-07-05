import { connect } from "react-redux"

const mapStateToProps = (state: any) => {
	const { firstActivityDate } = state.userData
	return {
		firstActivityDate,
	}
}

export default connect(mapStateToProps)
