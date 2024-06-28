import { connect } from "react-redux"
import { loadAthleteActivities } from "../../../../redux/actions/loadAthleteActivitiesActions"
import { resetPageNumber } from "../../../../redux/actions/loadMoreActions"

const mapDispatchToProps = {
	loadAthleteActivities,
	resetPageNumber,
}

export default connect(null, mapDispatchToProps)
