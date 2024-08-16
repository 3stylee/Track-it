import React from "react"
import { Placeholders, StyledCard, StyledRow } from "./components"
import { Cpu } from "react-feather"
import { EXAMPLE_QUESTIONS } from "../../../../constants/RAG_agents/exampleQuestions"

interface PlaceholderCardsProps {
	fetchData: (placeholderQuestion: string) => void
}

export const PlaceholderCards = ({ fetchData }: PlaceholderCardsProps) => {
	return (
		<Placeholders>
			<Cpu size={40} />
			<h4 className="mt-4">Your AI coach</h4>
			<p>Ask the coach about your data or training to get started</p>
			<StyledRow xs={1} sm={2} md={4}>
				{EXAMPLE_QUESTIONS.map((question) => (
					<StyledCard key={question} onClick={() => fetchData(question)}>
						{question}
					</StyledCard>
				))}
			</StyledRow>
		</Placeholders>
	)
}
