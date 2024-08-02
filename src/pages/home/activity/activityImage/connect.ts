import { connect } from "react-redux"
import { updateActivityType } from "../../../../redux/actions/modifyActivityActions"

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(null, mapDispatchToProps)
