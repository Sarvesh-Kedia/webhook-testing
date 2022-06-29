// https://medium.com/@BearerSH/consuming-webhooks-with-node-js-and-express-50e007fc7ae2

// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")


// Initialize express and define a port
const app = express()
const PORT = 3000


// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())


app.post("/hook", (req, res) => {
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
})

app.get("/", (req, res) => {
    res.send("welcome to home page");
    console.log("welcome to home page");
    res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))