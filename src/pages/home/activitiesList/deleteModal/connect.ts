import { connect } from "react-redux"
import { deleteAthleteActivity } from "../../../../redux/actions/athleteActivitiesActions"

const mapDispatchToProps = {
	deleteAthleteActivity,
}

export default connect(null, mapDispatchToProps)
