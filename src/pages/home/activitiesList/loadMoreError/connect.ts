import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		apiError: state.apiError.message,
	}
}

export default connect(mapStateToProps)
