import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadActivityStream } from "../../../../../../redux/actions/loadActivityStreamActions"

const mapStateToProps = (state: State) => {
	return {
		apiCallsInProgress: state.apiCallsInProgress,
	}
}

const mapDispatchToProps = {
	loadActivityStream,
}

export default connect(mapStateToProps, mapDispatchToProps)
