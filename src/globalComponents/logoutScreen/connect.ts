import { connect } from "react-redux"
import { logoutUser } from "../../redux/actions/authUserActions"

const mapDispatchToProps = {
	logoutUser,
}

export default connect(null, mapDispatchToProps)
