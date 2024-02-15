import { connect } from "react-redux"
import { setUnitImperial, setUnitMetric } from "../../redux/actions/unitActions"
import { State } from "../../redux/initialState"

const mapStateToProps = (state: State) => {
	return {
		units: state.units,
	}
}

const mapDispatchToProps = {
	setUnitImperial,
	setUnitMetric,
}

export default connect(mapStateToProps, mapDispatchToProps)
