import React, { useContext } from "react"
import connect from "./connect"
import { Stat, StatName, StatValue, StatsList } from "./components"
import ThemeContext from "../../../../../../theme/themeContext"

interface QuickStatsProps {
	athleteData: any
}

type QuickStatsType = {
	"Distance This Year (KM)": { count: string }
	"Runs This Year": { count: number }
	"Distance All Time (KM)": { count: string }
	"Runs All Time": { count: number }
	[key: string]: { count: number | string }
}

export const QuickStats = ({ athleteData }: QuickStatsProps) => {
	const { theme } = useContext(ThemeContext)
	if (athleteData.all_run_totals === undefined) {
		return null
	}

	const quickStats: QuickStatsType = {
		"Distance This Year (KM)": { count: (athleteData.ytd_run_totals.distance / 1000).toFixed(0) },
		"Runs This Year": { count: athleteData.ytd_run_totals.count },
		"Distance All Time (KM)": { count: (athleteData.all_run_totals.distance / 1000).toFixed(0) },
		"Runs All Time": { count: athleteData.all_run_totals.count },
	}

	return (
		<StatsList>
			{Object.keys(quickStats).map((key) => (
				<Stat key={key}>
					<StatValue>{quickStats[key].count}</StatValue>
					<StatName theme={theme}>{key}</StatName>
				</Stat>
			))}
		</StatsList>
	)
}

export default connect(QuickStats)
