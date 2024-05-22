import { connect } from "react-redux"
import { loadUserData } from "../../../../redux/actions/userDataActions"

export const mapStateToProps = (state: any) => {
	return {
		userData: state.userData,
	}
}

export const mapDispatchToProps = {
	loadUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)
