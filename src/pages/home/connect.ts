import { connect } from "react-redux"
import { State } from "../../redux/initialState"

export const mapStateToProps = (state: State) => {
	return {
		authState: state.authState,
	}
}

export default connect(mapStateToProps)
