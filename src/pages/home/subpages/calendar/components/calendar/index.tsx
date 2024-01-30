import React from "react"
import { Responsive, WidthProvider } from "react-grid-layout"

const ResponsiveGridLayout = WidthProvider(Responsive)

export const Calendar = () => {
	// Define the layout configuration for each grid item
	const responsiveProps = {
		className: "responsive-grid",
		breakpoints: { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
		cols: { lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 },
		layouts: {
			lg: [
				{ i: "1", x: 0, y: 0, w: 1, h: 1 },
				{ i: "2", x: 1, y: 1, w: 1, h: 1 },
				{ i: "3", x: 2, y: 2, w: 1, h: 1 },
				{ i: "4", x: 3, y: 3, w: 1, h: 1 },
				{ i: "5", x: 0, y: 1, w: 1, h: 1 },
			],
			md: [
				{ i: "1", x: 0, y: 0, w: 1, h: 1 },
				{ i: "2", x: 1, y: 1, w: 1, h: 1 },
				{ i: "3", x: 2, y: 2, w: 1, h: 1 },
				{ i: "4", x: 0, y: 1, w: 1, h: 1 },
				{ i: "5", x: 1, y: 2, w: 1, h: 1 },
			],
		},
		compactType: null,
		maxRows: 4,
	}

	return (
		<ResponsiveGridLayout {...responsiveProps} style={{ width: "100%" }}>
			<div key="1" style={{ background: "#ff4d4f" }}>
				Item 1
			</div>
			<div key="2" style={{ background: "#40a9ff" }}>
				Item 2
			</div>
			<div key="3" style={{ background: "#73d13d" }}>
				Item 3
			</div>
			<div key="4" style={{ background: "#73d13d" }}>
				Item 4
			</div>
			<div key="5" style={{ background: "#73d13d" }}>
				Item 5
			</div>
		</ResponsiveGridLayout>
	)
}
