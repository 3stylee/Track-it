import { connect } from "react-redux"
import { loadAthleteActivities } from "../../../../redux/actions/loadAthleteActivitiesActions"

const mapDispatchToProps = {
	loadAthleteActivities,
}

export default connect(null, mapDispatchToProps)
