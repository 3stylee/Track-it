import React from "react"
import { StatHeader, Unit, Value, Text } from "./components"

export const LabelledStat = ({ text, value, unit }: any) => {
	return (
		<>
			<StatHeader>
				<Text>{text}</Text>
			</StatHeader>
			<Value>
				{value}
				<Unit> {unit}</Unit>
			</Value>
		</>
	)
}
