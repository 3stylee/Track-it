import React, { Suspense, useContext } from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { ActivityTitle, CardContainer, StyledImage, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { getPaceFromSpeed } from "../../../../utils/getPaceFromSpeed"
import { THEMES } from "../../../../../../constants"
import ThemeContext from "../../../../../../theme/themeContext"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { LabelledStats, Stat } from "../../../../../../globalComponents/labelledStats"

export interface RouteMapProps {
	polyline?: any
	name: string
	time: number
	distance: string
	id: string
	speed: string
}

export const RouteMap = ({ polyline, speed, name, time, distance, id }: RouteMapProps) => {
	const { theme } = useContext(ThemeContext)

	let url =
		theme === THEMES.DARK
			? require("../../../../../../assets/images/no_gps_dark.png")
			: require("../../../../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
		url = getMapboxEndpoint(coordinatesString, theme)
	}

	const stats: Stat[] = [
		{
			text: "Distance",
			value: convertToKm(distance),
			unit: "KM",
			icon: "map.ico",
		},
		{
			text: "Pace",
			value: getPaceFromSpeed(speed),
			unit: "/KM",
			icon: "speedo.ico",
		},
		{
			text: "Time",
			value: getMinsFromSeconds(time),
			unit: "",
			icon: "stopwatch.ico",
		},
	]

	return (
		<div className="col">
			<StyledLink to={`/home/activity?id=${id}`}>
				<CardContainer
					id="map"
					className={`card ${theme === THEMES.DARK ? "text-white bg-dark" : ""} h-100`}
					theme={theme}>
					<Suspense
						fallback={
							<svg style={{ height: "13rem" }}>
								<rect width="100%" height="13rem" fill="#868e96" rx="5px" ry="5px" />
							</svg>
						}>
						<StyledImage src={url} alt="route map" className="card-img-left" />
					</Suspense>
					<div className="card-body">
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<LabelledStats stats={stats} small={true} />
					</div>
				</CardContainer>
			</StyledLink>
		</div>
	)
}
