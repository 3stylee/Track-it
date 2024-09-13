import React, { useState } from "react"
import { LineChart } from "../lineChart"
import { CardHeader, GraphTitle, StyledCard } from "./components"
import { WeekMonthDropdown } from "../weekMonthDropdown"
import { SORT_OPTIONS } from "../../../../constants/constants"
import { getMileageArray } from "../../../../utils/getMileageArray"
import { LabelledStats } from "../../../../globalComponents/labelledStats"
import connect from "./connect"
import { Card } from "react-bootstrap"
import { Units } from "../../../../models/state"
import { getMilageChartStats } from "../../../../utils/getMileageChartStats"
import { AthleteActivities } from "../../../../models/activities"
import ApiError from "../../../../globalComponents/apiError"

interface MileageChartProps {
	athleteActivities: AthleteActivities
	units: Units
	dataError: boolean
	loading: boolean
}

export const MileageChart = ({ athleteActivities, units, dataError, loading }: MileageChartProps) => {
	const [weekOrMonth, setWeekOrMonth] = useState(SORT_OPTIONS.WEEK)
	const mileageData = getMileageArray(athleteActivities, weekOrMonth, units.meters)
	const stats = getMilageChartStats(mileageData, weekOrMonth, units)

	return (
		<StyledCard>
			{dataError ? (
				<ApiError />
			) : (
				<>
					<Card.Header>
						<CardHeader>
							<GraphTitle>Mileage</GraphTitle>
							<WeekMonthDropdown
								weekOrMonth={weekOrMonth}
								setWeekOrMonth={setWeekOrMonth}
								loading={loading}
							/>
						</CardHeader>
					</Card.Header>
					<Card.Body>
						<div>
							<LabelledStats stats={stats} loading={loading} />
							<LineChart weekOrMonth={weekOrMonth} mileageData={mileageData} loading={loading} />
						</div>
					</Card.Body>
				</>
			)}
		</StyledCard>
	)
}

export default connect(MileageChart)
