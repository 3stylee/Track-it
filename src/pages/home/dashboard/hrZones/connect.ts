import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	const loading = state.apiCallsInProgress > 0
	return {
		zones: state.userData.zones,
		loading,
	}
}

export default connect(mapStateToProps)
