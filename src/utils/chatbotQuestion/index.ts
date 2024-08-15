import { ChatOpenAI } from "@langchain/openai"
import { AgentExecutor, createOpenAIToolsAgent } from "langchain/agents"
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts"
import { SYSTEM_PROMPT } from "../../constants/RAG_agents/prompts"
import { concat } from "@langchain/core/utils/stream"
import modelTools from "./tools"

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

export const chatbotQuestion = async (question: string, setData: any) => {
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
	let answer
	for await (const event of result) {
		const eventType = event.event
		if (eventType === "on_chat_model_stream") {
			if (answer === undefined) {
				answer = event.data.chunk.content
			} else {
				answer = concat(answer, event.data.chunk.content)
			}
			setData(answer)
		}
	}
}
