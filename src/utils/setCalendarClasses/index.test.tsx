import { setCalendarClasses } from "./index"
import { render } from "@testing-library/react"
import React from "react"

describe("setCalendarClasses", () => {
	it('adds "hidden" class to spinner and removes "blur" from calendar when isLoading is false', () => {
		const spinnerRef = React.createRef<HTMLDivElement>()
		const calendarRef = React.createRef<HTMLDivElement>()

		render(<div ref={spinnerRef} className="test"></div>)
		render(<div ref={calendarRef} className="test"></div>)

		setCalendarClasses(false, spinnerRef, calendarRef)

		expect(spinnerRef.current?.classList.contains("hidden")).toBe(true)
		expect(calendarRef.current?.classList.contains("blur")).toBe(false)
	})

	it('removes "hidden" class from spinner and adds "blur" to calendar when isLoading is true', () => {
		const spinnerRef = React.createRef<HTMLDivElement>()
		const calendarRef = React.createRef<HTMLDivElement>()

		render(<div ref={spinnerRef} className="test"></div>)
		render(<div ref={calendarRef} className="test"></div>)

		setCalendarClasses(true, spinnerRef, calendarRef)

		expect(spinnerRef.current?.classList.contains("hidden")).toBe(false)
		expect(calendarRef.current?.classList.contains("blur")).toBe(true)
	})
})
