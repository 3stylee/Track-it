import { connect } from "react-redux"
import { updateActivityType } from "../../../../redux/actions/modifyAthleteActivityActions"

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(null, mapDispatchToProps)
