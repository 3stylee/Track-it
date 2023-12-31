import { connect } from "react-redux"
import { updateSortMetric } from "../../../../../../redux/actions/dashboardSortActions"
import { State } from "../../../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		dashboardSortMetric: state.dashboardSortMetric,
	}
}

const mapDispatchToProps = {
	updateSortMetric,
}

export default connect(mapStateToProps, mapDispatchToProps)
