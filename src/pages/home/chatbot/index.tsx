import React, { useRef, useState } from "react"
import { chatbotQuestion } from "../../../utils/chatbotQuestion"
import { StyledCard, MessageContainer, Message, PageContainer, MessageText, Loading } from "./components"
import { Footer } from "./footer"
import { PlaceholderCards } from "./placeholderCards"
import loadingDots from "../../../assets/animations/Loading.json"

export interface MessageProps {
	sender: "user" | "bot"
	index: number
	text: string
}

export const Chatbot = () => {
	const [messages, setMessages] = useState<MessageProps[]>([])
	const [index, setIndex] = useState<number>(0)
	const [loading, setLoading] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const fetchData = async (placeholderQuestion?: string) => {
		let question = inputRef.current?.value
		if (placeholderQuestion && typeof placeholderQuestion === "string") {
			question = placeholderQuestion
		}
		if (question) {
			inputRef.current!.value = ""
			setMessages((prevMessages) => [...prevMessages, { sender: "user", index, text: question || "" }])
			try {
				setLoading(true)
				await chatbotQuestion(question, setMessages, index + 1)
			} catch (error: any) {
				setMessages((prevMessages) => [...prevMessages, { sender: "bot", index, text: error.message }])
			} finally {
				setIndex(index + 2)
				setLoading(false)
			}
		}
	}

	return (
		<PageContainer>
			<StyledCard>
				<MessageContainer>
					{messages.length === 0 ? (
						<PlaceholderCards fetchData={fetchData} />
					) : (
						<>
							{messages.map((message, i) => (
								<Message key={i} sender={message.sender}>
									<MessageText sender={message.sender}>
										{message.text}
										{index + 1 === i && loading && <Loading animationData={loadingDots} />}
									</MessageText>
								</Message>
							))}
						</>
					)}
				</MessageContainer>
				<Footer
					inputRef={inputRef}
					setMessages={setMessages}
					setIndex={setIndex}
					fetchData={fetchData}
					showClear={messages.length > 0}
				/>
			</StyledCard>
		</PageContainer>
	)
}
