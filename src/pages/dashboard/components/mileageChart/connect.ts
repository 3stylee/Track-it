import { State } from "../../../../redux/initialState"
import { connect } from "react-redux"

const mapStateToProps = (state: State) => {
	return {
		dashboardSortMetric: state.dashboardSortMetric,
	}
}

export default connect(mapStateToProps)
