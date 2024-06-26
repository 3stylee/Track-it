import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		units: state.units,
	}
}

export default connect(mapStateToProps)
