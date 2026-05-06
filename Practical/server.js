const express = require("express")
const authMiddleware = require("./middleware/authMiddleware")

const app = express()

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/public", (req, res) => {
    res.send("Public Route")
})

app.get("/private", authMiddleware, (req, res) => {
    res.send("Welcome to private route")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
    console.log("http://localhost:3000")
})