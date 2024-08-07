import React from "react"
import { StatsContainer, Text, Value, Unit, StatHeader } from "./components"

export interface Stat {
	text: string
	value: number | string
	unit: string
}

export type small = boolean | undefined

interface Props {
	stats: Stat[]
	small?: small
	darkMode?: boolean
}

export const LabelledStats = ({ stats, small, darkMode }: Props) => {
	return (
		<StatsContainer small={small} darkMode={darkMode}>
			{stats.map((stat: Stat) => {
				const { text, value, unit } = stat
				return (
					<div key={text}>
						<StatHeader darkMode={darkMode}>
							<Text small={small}>{text}</Text>
						</StatHeader>
						<Value small={small}>
							{value}
							<Unit small={small} darkMode={darkMode}>
								{" "}
								{unit}
							</Unit>
						</Value>
					</div>
				)
			})}
		</StatsContainer>
	)
}
