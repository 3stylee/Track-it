import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		athleteData: state.athleteData,
	}
}

export default connect(mapStateToProps)
