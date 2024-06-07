import { connect } from "react-redux"

const mapStateToProps = (state: any) => {
	return {
		sessionGroups: state.sessionGroups,
	}
}

export default connect(mapStateToProps)
