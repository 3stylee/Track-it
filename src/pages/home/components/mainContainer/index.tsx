import React, { useState } from "react"
import { ColouredContainer } from "./components"
import { HeaderContainer } from "../headerContainer"
import { DataContainer } from "../dataContainer"

export const MainContainer = () => {
	const [data, setData] = useState("Click a button to see some data")

	const updateData = (data: string) => {
		setData(data)
	}

	return (
		<ColouredContainer>
			<HeaderContainer updateData={updateData} />
			<DataContainer data={data} />
		</ColouredContainer>
	)
}
