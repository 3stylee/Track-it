import { connect } from "react-redux"
import { State } from "../../redux/initialState"
import { logoutUser } from "../../redux/actions/loadAthleteDataActions"

export const mapStateToProps = (state: State) => {
	return {
		sidebarExpanded: state.sidebarExpanded,
	}
}

export const mapDispatchToProps = {
	logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
