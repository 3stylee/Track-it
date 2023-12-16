import React from "react"

interface DataChipProps {
	value: number
	metric: string
}

export const DataChip = ({ value, metric }: DataChipProps) => {
	return (
		<div className="card">
			<div className="card-content">
				<div className="card-body">
					<div className="media d-flex">
						<div className="media-body text-left">
							<h3 className="danger">{value}</h3>
							<span>{metric}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
