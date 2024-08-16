import { ChatOpenAI } from "@langchain/openai"
import { AgentExecutor, createOpenAIToolsAgent } from "langchain/agents"
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts"
import { SYSTEM_PROMPT } from "../../constants/RAG_agents/prompts"
import { concat } from "@langchain/core/utils/stream"
import modelTools from "./tools"
import { MessageProps } from "../../pages/home/chatbot"

const llm = new ChatOpenAI({
	model: "gpt-4o-mini",
	temperature: 0,
	apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
})
const tools = modelTools

const promptTemplate = ChatPromptTemplate.fromMessages([
	["system", SYSTEM_PROMPT],
	["user", "{input}"],
	new MessagesPlaceholder("agent_scratchpad"),
])

export const chatbotQuestion = async (
	question: string,
	setData: (value: React.SetStateAction<MessageProps[]>) => void,
	index: number
) => {
	const agent = await createOpenAIToolsAgent({
		llm,
		tools,
		prompt: promptTemplate,
	})
	const agentExecutor = new AgentExecutor({
		agent,
		tools,
	})
	const result = await agentExecutor.streamEvents(
		{ input: `${question}. My user ID is ${localStorage.getItem("uId")}` },
		{ version: "v2" }
	)
	let answer: string | undefined
	setData((prevMessages: any) => [...prevMessages, { sender: "bot", index, text: "" }])
	for await (const event of result) {
		const eventType = event.event
		if (eventType === "on_chat_model_stream") {
			if (answer === undefined) {
				answer = event.data.chunk.content
			} else {
				answer = concat(answer, event.data.chunk.content)
			}
			// eslint-disable-next-line no-loop-func
			setData((prevMessages: any) =>
				prevMessages.map((message: any, i: number) => (i === index ? { ...message, text: answer } : message))
			)
		}
	}
}
