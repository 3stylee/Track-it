import { connect } from "react-redux"
import { loadData } from "../../../../redux/actions/loadDataActions"
import { HeaderContainer } from "."

const mapDispatchToProps = {
	loadData,
}

export default connect(null, mapDispatchToProps)(HeaderContainer)
