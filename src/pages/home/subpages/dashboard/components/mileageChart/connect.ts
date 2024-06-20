import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		athleteActivities: state.athleteActivities || [],
		units: state.units,
	}
}

export default connect(mapStateToProps)
