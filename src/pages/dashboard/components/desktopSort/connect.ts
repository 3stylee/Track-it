import { connect } from "react-redux"
import { updateSortMetric } from "../../../../redux/actions/dashboardSortActions"

const mapDispatchToProps = {
	updateSortMetric,
}

export default connect(null, mapDispatchToProps)
