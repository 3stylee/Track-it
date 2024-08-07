import { connect } from "react-redux"

const mapStateToProps = (state: any) => {
	return {
		sessions: state.sessions,
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

export default connect(mapStateToProps)
