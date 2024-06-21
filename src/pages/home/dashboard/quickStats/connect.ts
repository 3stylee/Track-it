import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		athleteData: state.athleteData,
		units: state.units,
	}
}

export default connect(mapStateToProps)
