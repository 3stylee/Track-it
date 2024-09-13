import React from "react"
import connect from "./connect"
import { Stat, StatName, StatValue, StatsList } from "./components"
import { Units } from "../../../../models/state"
import { AthleteData, QuickStatsType } from "../../../../models/athlete"
import { TextPlaceholder } from "../../../../globalComponents/placeholderUI/components"

interface QuickStatsProps {
	athleteData: AthleteData
	units: Units
	dataError: boolean
	loading: boolean
}

export const QuickStats = ({ athleteData, units, dataError, loading }: QuickStatsProps) => {
	const { meters, unitString } = units
	if (dataError) {
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
						<StatValue>{loading ? <TextPlaceholder fontSize="1.5rem" width="4rem" /> : count}</StatValue>
						<StatName>
							{loading ? (
								<TextPlaceholder fontSize="0.75rem" width="8rem" />
							) : (
								<>
									{key}
									{unit !== undefined ? ` (${unit})` : ""}
								</>
							)}
						</StatName>
					</Stat>
				)
			})}
		</StatsList>
	)
}

export default connect(QuickStats)
