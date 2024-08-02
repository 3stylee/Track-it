import React, { useState } from "react"
import { ActivityTitle, CardContainer, DateText, ImagePlaceholder, StyledImage, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { ACTIVITY_TYPES, ROUTE_PATHS, THEMES } from "../../../../constants/constants"
import { LabelledStats } from "../../../../globalComponents/labelledStats"
import { useTheme } from "@emotion/react"
import { Card } from "react-bootstrap"
import { getActivityStats } from "../../../../utils/getActivityStats"
import connect from "./connect"
import { Units } from "../../../../models/state"
import { convertISOToDDMMYY } from "../../../../utils/convertISOtoDDMMYY"
import { BadgeDropdown } from "../../../../globalComponents/badgeDropdown"

export interface RouteMapProps {
	polyline: number[][]
	name: string
	time: number
	distance: number
	id: number
	speed: number
	units: Units
	predictedType: string
	start: string
	updateActivityType: (id: number, type: string) => void
}

const RouteMap = ({
	polyline,
	speed,
	name,
	time,
	distance,
	id,
	units,
	predictedType,
	start,
	updateActivityType,
}: RouteMapProps) => {
	const theme = useTheme()
	const [imageLoaded, setImagedLoaded] = useState(false)

	const handleSetType = (selected: string) => {
		updateActivityType(id, selected)
	}

	let url =
		theme.name === THEMES.DARK
			? require("../../../../assets/images/no_gps_dark.png")
			: require("../../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		url = getMapboxEndpoint(polyline, theme.name)
	}
	const stats = getActivityStats(distance, speed, time, units)
	return (
		<StyledLink to={ROUTE_PATHS.ACTIVITY + `?id=${id}`}>
			<CardContainer id="map" text={theme.bootstrap.textColor} bg={theme.bootstrap.background} className="h-100">
				<StyledImage
					src={url}
					alt="route map"
					className={`card-img-left ${!imageLoaded ? "d-none" : ""}`}
					onLoad={() => {
						setImagedLoaded(true)
					}}
				/>
				<BadgeDropdown
					showBadge={imageLoaded}
					selected={predictedType}
					setSelected={handleSetType}
					options={ACTIVITY_TYPES}
				/>
				<DateText>{convertISOToDDMMYY(start)}</DateText>
				{!imageLoaded && <ImagePlaceholder />}
				<Card.Body>
					<ActivityTitle className="card-title">{name}</ActivityTitle>
					<LabelledStats stats={stats} small={true} />
				</Card.Body>
			</CardContainer>
		</StyledLink>
	)
}

export default connect(RouteMap)
