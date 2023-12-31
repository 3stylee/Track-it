import { State } from "../../../../../../redux/initialState"
import { connect } from "react-redux"
import { loadActivityData } from "../../../../../../redux/actions/loadDataActions"

const mapStateToProps = (state: State) => {
	return {
		activityData: state.activityData,
	}
}

const mapDispatchToProps = {
	loadActivityData,
}

export default connect(mapStateToProps, mapDispatchToProps)
