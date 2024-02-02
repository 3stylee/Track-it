import React from "react"
import { StatTitle, StatValue } from "./components"
export const ActivityStat = ({ title, value }: any) => {
	return (
		<div>
			<StatTitle>{title}</StatTitle>
			<StatValue>{value}</StatValue>
		</div>
	)
}
