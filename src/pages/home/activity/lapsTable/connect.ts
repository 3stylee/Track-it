import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	const { predictedType } = state.currentActivity
	return {
		units: state.units,
		predictedType,
	}
}

export default connect(mapStateToProps)
