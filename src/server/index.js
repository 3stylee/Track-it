const express = require("express")
const path = require("path")
const tf = require("@tensorflow/tfjs")
const predictData = require("./utils/predictData")

const app = express()
const port = 3009

// Serve the model files from the specified directory
const modelDirectory = path.join(__dirname, "tfjs_model")
app.use(express.static(modelDirectory))

// Load the TensorFlow.js model
const modelUrl = "http://localhost:3009/model.json"
const loadModel = async () => {
	try {
		const model = await tf.loadLayersModel(modelUrl)
		console.log("Model loaded successfully.")
		return model
	} catch (error) {
		console.error("Error loading the model:", error)
	}
}

let loadedModel

// Middleware to ensure the model is loaded before processing requests
app.use(async (req, res, next) => {
	if (!loadedModel) {
		loadedModel = await loadModel()
	}
	next()
})

app.use(express.json())

// Endpoint for accessing the loaded model
app.get("/model.json", (req, res) => {
	res.sendFile(path.join(__dirname, "tfjs_model", "model.json"))
})

// Endpoint for processing data
app.post("/data", async (req, res) => {
	const data = req.body.data
	const result = await predictData(data)
	res.json({ result })
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
