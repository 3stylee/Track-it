import { connect } from "react-redux"
import { State } from "../../redux/initialState"

export const mapStateToProps = (state: State) => {
	return {
		sidebarExpanded: state.sidebarExpanded,
	}
}

export default connect(mapStateToProps)
