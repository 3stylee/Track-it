import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		zones: state.userData.zones,
	}
}

export default connect(mapStateToProps)
