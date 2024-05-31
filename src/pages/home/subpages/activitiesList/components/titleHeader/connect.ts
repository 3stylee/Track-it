import { connect } from "react-redux"
import { clearFilter, loadAthleteActivities } from "../../../../../../redux/actions/loadAthleteActivitiesActions"

const mapDispatchToProps = {
	loadAthleteActivities,
	clearFilter,
}

export default connect(null, mapDispatchToProps)
