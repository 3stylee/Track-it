fetch("http://localhost:3001/data", {
	method: "POST",
	body: JSON.stringify({
		data: [
			["2024-02-16T12:43:26Z", 2835, 9881.5, 3.486, 32, "Run", 153.9],
			["2024-02-15T18:57:48Z", 880, 3172.4, 3.605, 10, "Run", 154.2],
			["2024-02-15T18:30:04Z", 1203, 5669.6, 4.713, 32, "Run", 165.9],
			["2024-02-15T17:18:00Z", 586, 2036.6, 3.475, 12, "Run", 146],
			["2023-01-15T12:48:33Z", 3606, 0, 0, 0, "Ride", 154.9],
			["2023-02-02T18:37:18Z", 1202, 4873.5, 4.055, 32, "Run", 164],
			["2023-09-24T09:54:57Z", 3597, 12658.4, 3.519, 137, "Run", 173.8],
		],
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json()) // Convert the response data to a JSON object
	.then((data) => console.log(data)) // Print the data to the console
