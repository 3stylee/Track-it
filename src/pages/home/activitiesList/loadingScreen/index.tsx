import React from "react"
import { Container } from "../dataContainer/components"
import { Col, Row } from "react-bootstrap"
import { ActivityDescription, CardContainer, ImagePlaceholder, MoreButton } from "../routeMap/components"
import { MoreVertical } from "react-feather"
import { LabelledStats } from "../../../../globalComponents/labelledStats"
import connect from "./connect"
import { TextPlaceholder } from "../../../../globalComponents/placeholderUI/components"

const LoadingScreen = ({ units }: any) => {
	const dummyStats = [
		{
			text: "Distance",
			value: 0,
			unit: units.unitString,
		},
		{
			text: "Pace",
			value: 0,
			unit: `/${units.unitString}`,
		},
		{
			text: "Time",
			value: 0,
			unit: "",
		},
	]

	return (
		<Container noPadding={false}>
			<Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-2 g-md-3">
				{[...Array(12)].map((_, index) => (
					<Col key={index}>
						<CardContainer>
							<ImagePlaceholder />
							<ActivityDescription>
								<TextPlaceholder fontSize="1.125rem" width="10rem" />
								<MoreButton>
									<MoreVertical size={18} />
								</MoreButton>
								<TextPlaceholder fontSize="0.675rem" width="5rem" />
								<LabelledStats stats={dummyStats} small loading />
							</ActivityDescription>
						</CardContainer>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default connect(LoadingScreen)
