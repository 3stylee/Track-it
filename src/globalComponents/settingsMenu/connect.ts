import { connect } from "react-redux"
import { setUnitImperial, setUnitMetric } from "../../redux/actions/unitActions"
import { State } from "../../redux/initialState"
import { logoutUser } from "../../redux/actions/stravaActions"

const mapStateToProps = (state: State) => {
	return {
		units: state.units,
	}
}

const mapDispatchToProps = {
	setUnitImperial,
	setUnitMetric,
	logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
