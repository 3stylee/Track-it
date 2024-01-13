import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		athleteActivities: state.athleteActivities,
	}
}

export default connect(mapStateToProps)
