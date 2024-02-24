import React from "react"
import connect from "./connect"
import { Stat, StatName, StatValue, StatsList } from "./components"
import { Units } from "../../../../../../models"

interface QuickStatsProps {
	athleteData: any
	units: Units
}

type QuickStatsType = {
	"Distance This Year": { count: string; unit: string }
	"Runs This Year": { count: number }
	"Distance All Time": { count: string; unit: string }
	"Runs All Time": { count: number }
	[key: string]: { count: number | string; unit?: string }
}

export const QuickStats = ({ athleteData, units }: QuickStatsProps) => {
	const { meters, unitString } = units
	if (athleteData.all_run_totals === undefined) {
		return null
	}

	const quickStats: QuickStatsType = {
		"Distance This Year": { count: (athleteData.ytd_run_totals.distance / meters).toFixed(0), unit: unitString },
		"Runs This Year": { count: athleteData.ytd_run_totals.count },
		"Distance All Time": { count: (athleteData.all_run_totals.distance / meters).toFixed(0), unit: unitString },
		"Runs All Time": { count: athleteData.all_run_totals.count },
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
