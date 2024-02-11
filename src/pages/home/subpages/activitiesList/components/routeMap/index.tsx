import React, { Suspense } from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { ActivityTitle, CardContainer, StyledImage, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { getPaceFromSpeed } from "../../../../utils/getPaceFromSpeed"
import { THEMES } from "../../../../../../constants"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { LabelledStats, Stat } from "../../../../../../globalComponents/labelledStats"
import { useTheme } from "@emotion/react"
import { Card, Col } from "react-bootstrap"

export interface RouteMapProps {
	polyline?: any
	name: string
	time: number
	distance: string
	id: string
	speed: string
}

export const RouteMap = ({ polyline, speed, name, time, distance, id }: RouteMapProps) => {
	const theme = useTheme()

	let url =
		theme.name === THEMES.DARK
			? require("../../../../../../assets/images/no_gps_dark.png")
			: require("../../../../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
		url = getMapboxEndpoint(coordinatesString, theme.name)
	}

	const stats: Stat[] = [
		{
			text: "Distance",
			value: convertToKm(distance),
			unit: "KM",
			icon: "map-pin",
		},
		{
			text: "Pace",
			value: getPaceFromSpeed(speed),
			unit: "/KM",
			icon: "watch",
		},
		{
			text: "Time",
			value: getMinsFromSeconds(time),
			unit: "",
			icon: "clock",
		},
	]

	return (
		<Col>
			<StyledLink to={`/home/activity?id=${id}`}>
				<CardContainer
					id="map"
					text={theme.bootstrap.textColor}
					bg={theme.bootstrap.background}
					className="h-100">
					<Suspense
						fallback={
							<svg style={{ height: "13rem" }}>
								<rect width="100%" height="13rem" fill="#868e96" rx="5px" ry="5px" />
							</svg>
						}>
						<StyledImage src={url} alt="route map" className="card-img-left" />
					</Suspense>
					<Card.Body>
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<LabelledStats stats={stats} small={true} />
					</Card.Body>
				</CardContainer>
			</StyledLink>
		</Col>
	)
}
