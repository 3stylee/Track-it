import { connect } from "react-redux"

const mapStateToProps = (state: any) => {
	const apiCallsInProgress = state.apiCallsInProgress
	return {
		sessions: state.sessions,
		loading: apiCallsInProgress > 0,
	}
}

export default connect(mapStateToProps)
