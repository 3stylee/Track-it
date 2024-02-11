import React from "react"
import { StatsContainer, Text, Value, Unit, StatHeader, Icon } from "./components"

export interface Stat {
	text: string
	value: number | string
	unit: string
	icon?: string
}

export type small = boolean | undefined

interface Props {
	stats: Stat[]
	small?: small
}

export const LabelledStats = ({ stats, small }: Props) => {
	return (
		<StatsContainer small={small}>
			{stats.map((stat: Stat) => {
				const { text, value, unit, icon } = stat
				return (
					<div key={text}>
						<StatHeader>
							<Text small={small}>{text}</Text>
							{icon && <Icon icon={icon} size={"0.75rem"} />}
						</StatHeader>
						<Value small={small}>
							{value}
							<Unit small={small}> {unit}</Unit>
						</Value>
					</div>
				)
			})}
		</StatsContainer>
	)
}
