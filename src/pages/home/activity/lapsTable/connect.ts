import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	const { predictedType } = state.currentActivity
	const loading = state.apiCallsInProgress > 0
	return {
		units: state.units,
		predictedType,
		loading,
	}
}

export default connect(mapStateToProps)
