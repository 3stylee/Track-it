import { connect } from "react-redux"
import { loadData } from "../../../../redux/actions/loadDataActions"
import { State } from "../../../../redux/initialState"
import { updateActivityType } from "../../../../redux/actions/loadDataActions"

const mapDispatchToProps = {
	loadData,
	updateActivityType,
}

export const mapStateToProps = (state: State) => {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)
