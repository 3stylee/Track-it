import { connect } from "react-redux"
import { State } from "../../../../redux/initialState"
import { updateSelectedDate } from "../../../../redux/actions/selectedDateActions"

const mapStateToProps = (state: State) => {
	return {
		selectedDate: state.selectedDate,
	}
}

const mapDispatchToProps = {
	updateSelectedDate,
}

export default connect(mapStateToProps, mapDispatchToProps)
