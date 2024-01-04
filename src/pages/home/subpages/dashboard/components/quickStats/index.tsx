import React from "react"
import connect from "./connect"
import { StatCard } from "./components"

interface QuickStatsProps {
	athleteData: any
}

type QuickStatsType = {
	"Number of runs to date": { count: number }
	"Number of runs this year": { count: number }
	[key: string]: { count: number } // Index signature to allow any string key
}

export const QuickStats = ({ athleteData }: QuickStatsProps) => {
	if (athleteData.all_run_totals === undefined) {
		return null
	}

	const quickStats: QuickStatsType = {
		"Number of runs to date": { count: athleteData.all_run_totals.count },
		"Number of runs this year": { count: athleteData.ytd_run_totals.count },
	}

	return (
		<div className="card-content row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
			{Object.keys(quickStats).map((key) => (
				<StatCard className="card" key={key}>
					<div className="card-body">
						<div className="media-body text-right">
							<h4>{key}</h4>
							<span>{quickStats[key].count}</span>
						</div>
					</div>
				</StatCard>
			))}
		</div>
	)
}

export default connect(QuickStats)
