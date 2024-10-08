import { connect } from "react-redux"
import { State } from "../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		errorStatus: state.apiError.status,
	}
}

export default connect(mapStateToProps)
