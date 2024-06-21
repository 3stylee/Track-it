export const removeSpaces = (text: string) => {
	let modifiedSentence = text.replace(/\s*x\s*/g, " x ")
	modifiedSentence = modifiedSentence.replace(/\s+/g, " ").trim()
	return modifiedSentence
}
