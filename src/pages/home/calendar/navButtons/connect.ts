import { connect } from "react-redux"
import { resetSelectedDate, updateSelectedDate } from "../../../../redux/actions/selectedDateActions"

const mapStateToProps = (state: any) => {
	const { firstActivityDate } = state.userData
	return {
		firstActivityDate,
	}
}

const mapDispatchToProps = {
	resetSelectedDate,
	updateSelectedDate,
}

export default connect(mapStateToProps, mapDispatchToProps)
