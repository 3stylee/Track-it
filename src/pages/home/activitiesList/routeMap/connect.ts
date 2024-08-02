import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { updateActivityType } from "../../../../redux/actions/modifyActivityActions"

const mapStateToProps = (state: State) => {
	return {
		units: state.units,
	}
}

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(mapStateToProps, mapDispatchToProps)
