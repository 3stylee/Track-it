import React, { useEffect, useRef, useState } from "react"
import { CardBody, ChangePercent, GraphDescription, InfoText, StyledCard, SubHeader } from "./components"
import connect from "./connect"
import { AthleteActivities } from "../../../../models/activities"
import { getTrainingLoad } from "../../../../utils/getTrainingLoad"
import ApiError from "../../../../globalComponents/apiError"
import { WEEK_GRAPH_LABELS } from "../../../../constants/constants"
import { Bar } from "react-chartjs-2"
import { BarElement, Chart } from "chart.js"
import { Card } from "react-bootstrap"
import { getOptions } from "./chartOptions"
import { ChevronDown, ChevronUp, Info } from "react-feather"
import { useTheme } from "@emotion/react"
import { TextPlaceholder } from "../../../../globalComponents/placeholderUI/components"

interface TrainingLoadProps {
	athleteActivities: AthleteActivities | null
	dataError: boolean
	loading: boolean
}

Chart.register(BarElement)

const TrainingLoad = ({ athleteActivities, dataError, loading }: TrainingLoadProps) => {
	const chartRef = useRef<HTMLDivElement>(null)
	const theme = useTheme()
	const [gradient, setGradient] = useState<string | CanvasGradient | CanvasPattern>("")

	useEffect(() => {
		const canvas = chartRef.current?.firstChild as HTMLCanvasElement | null
		if (canvas) {
			const ctx = canvas.getContext("2d")
			if (ctx) {
				const gradient = ctx.createLinearGradient(0, 0, 0, 400)
				gradient.addColorStop(0.3, "rgba(102, 61, 255, 0.5)")
				gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
				setGradient(gradient)
			}
		}
	}, [chartRef])

	if (dataError) return <ApiError height="100%" />

	const { loadArray, previousWeekLoad } = getTrainingLoad(athleteActivities)
	const total = loadArray.reduce((acc, curr) => acc + curr, 0)
	const changePercent = ((total - previousWeekLoad) / previousWeekLoad) * 100
	const labels = WEEK_GRAPH_LABELS

	const data = {
		labels,
		datasets: [
			{
				label: "Training Load",
				data: loading ? [20, 100, 74, 101, 56, 23, 130] : loadArray,
				borderColor: "rgb(102, 61, 255)",
				borderRadius: Number.MAX_VALUE,
				backgroundColor: loading ? theme.loading.placeholderBackground : gradient,
				pointHitRadius: 20,
			},
		],
	}

	return (
		<StyledCard className="h-100">
			<Card.Header>
				<Card.Title className="mt-2">Training Load</Card.Title>
			</Card.Header>
			<CardBody>
				<GraphDescription>
					<SubHeader>
						{loading ? (
							<TextPlaceholder fontSize="2.125rem" width="10rem" />
						) : (
							<h1 className="m-0">{total}</h1>
						)}
						<ChangePercent>
							{!isNaN(changePercent) && !loading && (
								<>
									{changePercent > 0 ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
									<span>{changePercent.toFixed(0)}%</span>
								</>
							)}
						</ChangePercent>
					</SubHeader>
					<InfoText>
						{loading ? (
							Array.from({ length: 3 }).map((_, i) => (
								<TextPlaceholder key={i} fontSize="0.8rem" width="8rem" />
							))
						) : (
							<>
								<Info size={12} /> Training load is a measure of your training intensity
							</>
						)}
					</InfoText>
				</GraphDescription>
				<div className="w-100" ref={chartRef}>
					<Bar data={data} options={getOptions(loading)} />
				</div>
			</CardBody>
		</StyledCard>
	)
}

export default connect(TrainingLoad)
