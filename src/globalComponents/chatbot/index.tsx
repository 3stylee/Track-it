import React, { useRef, useState } from "react"
import { chatbotQuestion } from "../../utils/chatbotQuestion"
import { Button } from "react-bootstrap"
import { StyledDiv, Response } from "./components"
import connect from "./connect"

const Chatbot = ({ chatbotExpanded }: { chatbotExpanded: boolean }) => {
	const [data, setData] = useState<string | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	const fetchData = async () => {
		const question = inputRef.current?.value
		if (question) {
			try {
				await chatbotQuestion(question, setData)
			} catch (error) {
				console.error("Error fetching data:", error)
			}
		}
	}

	return (
		<StyledDiv show={chatbotExpanded}>
			<h1>Chatbot</h1>
			<input className="w-50" placeholder="Enter your question here" ref={inputRef} />
			<Button onClick={fetchData} className="mt-4">
				Fetch Data
			</Button>
			<Response>{data ? <p>{data}</p> : <p>Loading...</p>}</Response>
		</StyledDiv>
	)
}

export default connect(Chatbot)
