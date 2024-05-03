import { connect } from "react-redux"
import { openSidebar, closeSidebar } from "../../redux/actions/sidebarActions"
import { State } from "../../redux/initialState"

const mapDispatchToProps = {
	closeSidebar,
	openSidebar,
}

const mapStateToProps = (state: State) => {
	return {
		sidebarExpanded: state.sidebarExpanded,
		authState: state.authState,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)
