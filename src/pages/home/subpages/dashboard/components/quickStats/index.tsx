import React from "react"
import connect from "./connect"

interface QuickStatsProps {
	athleteData: any
}

type QuickStatsType = {
	"Number of runs to date": { count: number }
	"Number of runs this year": { count: number }
	"Total distance to date": { count: string }
	"Total distance this year": { count: string }
	[key: string]: { count: number | string }
}

export const QuickStats = ({ athleteData }: QuickStatsProps) => {
	if (athleteData.all_run_totals === undefined) {
		return null
	}

	const quickStats: QuickStatsType = {
		"Number of runs to date": { count: athleteData.all_run_totals.count },
		"Number of runs this year": { count: athleteData.ytd_run_totals.count },
		"Total distance to date": { count: (athleteData.all_run_totals.distance / 1000).toFixed(2) + " KM" },
		"Total distance this year": { count: (athleteData.ytd_run_totals.distance / 1000).toFixed(2) + " KM" },
	}

	return (
		<div className="card-content row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4">
			{Object.keys(quickStats).map((key) => (
				<div className="col-md-3" key={key}>
					<div className="card h-100">
						<div className="card-body">
							<div className="media-body text-right">
								<h4>{key}</h4>
								<span>{quickStats[key].count}</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default connect(QuickStats)
