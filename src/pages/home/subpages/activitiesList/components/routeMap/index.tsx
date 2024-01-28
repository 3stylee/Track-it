import React, { useContext } from "react"
import { convertToKm } from "../../../../utils/convertDistanceToKM"
import { ActivityTitle, CardContainer, DescriptionContainer, StyledImage, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { getPaceFromSpeed } from "../../../../utils/getPaceFromSpeed"
import { THEMES } from "../../../../../../constants"
import ThemeContext from "../../../../../../theme/themeContext"

export interface RouteMapProps {
	polyline?: any
	name: string
	distance: string
	id: string
	speed: string
}

export const RouteMap = ({ polyline, speed, name, distance, id }: RouteMapProps) => {
	const [imageLoaded, setImageLoaded] = React.useState(false)
	const { theme } = useContext(ThemeContext)

	let url =
		theme === THEMES.DARK
			? require("../../../../../../assets/images/no_gps_dark.png")
			: require("../../../../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
		url = getMapboxEndpoint(coordinatesString, theme)
	}

	const convertedDistance = convertToKm(distance)
	const pace = getPaceFromSpeed(speed)
	return (
		<div className="col">
			<StyledLink to={`/home/activity?id=${id}`} className="col">
				<CardContainer
					id="map"
					className={`card ${theme === THEMES.DARK ? "text-white bg-dark" : ""} h-100`}
					theme={theme}>
					<StyledImage
						src={url}
						alt="route map"
						className={`card-img-left ${!imageLoaded ? "d-none" : ""}`}
						onLoad={() => setImageLoaded(true)}
					/>
					{!imageLoaded && (
						<svg style={{ height: "13rem" }}>
							<rect width="100%" height="13rem" fill="#868e96" rx="5px" ry="5px" />
						</svg>
					)}
					<div className="card-body">
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<DescriptionContainer>
							<p className="card-text m-0">{convertedDistance}</p>
							<p className="card-text m-0">{pace}</p>
						</DescriptionContainer>
					</div>
				</CardContainer>
			</StyledLink>
		</div>
	)
}
