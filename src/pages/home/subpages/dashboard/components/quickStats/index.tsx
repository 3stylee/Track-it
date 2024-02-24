import React from "react"
import connect from "./connect"
import { Stat, StatName, StatValue, StatsList } from "./components"
import { Units } from "../../../../../../models"
import { AthleteData, QuickStatsType } from "../../models"

interface QuickStatsProps {
	athleteData: AthleteData
	units: Units
}

export const QuickStats = ({ athleteData, units }: QuickStatsProps) => {
	const { meters, unitString } = units
	if (athleteData.allTotalRunDistance === undefined) {
		return null
	}

	const quickStats: QuickStatsType = {
		"Distance This Year": { count: (athleteData.yearTotalRunDistance / meters).toFixed(0), unit: unitString },
		"Runs This Year": { count: athleteData.yearTotalRuns },
		"Distance All Time": { count: (athleteData.allTotalRunDistance / meters).toFixed(0), unit: unitString },
		"Runs All Time": { count: athleteData.allTotalRuns },
	}

	return (
		<StatsList>
			{Object.keys(quickStats).map((key) => {
				const { unit, count } = quickStats[key]
				return (
					<Stat key={key}>
						<StatValue>{count}</StatValue>
						<StatName>
							{key}
							{unit !== undefined ? ` (${unit})` : ""}
						</StatName>
					</Stat>
				)
			})}
		</StatsList>
	)
}

export default connect(QuickStats)
