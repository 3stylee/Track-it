import { connect } from "react-redux"
import { clearError } from "../../../redux/actions/apiStatusActions"

const mapDispatchToProps = {
	clearError,
}

export default connect(null, mapDispatchToProps)
