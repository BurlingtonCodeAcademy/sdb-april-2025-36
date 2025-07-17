const express = require("express")
const mongoose = require("mongoose")

const PORT = 8080

const app = express()

app.use(express.json())

// connect to mongodb
const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017")

        console.log("Connected to mongodb!")

    } catch (error) {
        console.error("Error" + error)
        process.exit(1)
    }
}

connectDB()

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
})

const User = mongoose.model("User", userSchema)

app.get("/api/health", (req, res) => {
    res.send("api is alive!")
})

// POST - /api/register - register a new user
app.post("/api/register", async (req, res) => {
    const { username, email } = req.body

    try {
        // save to mongodb database
        const newUser = new User({
            username,
            email
        })

        const savedUser = await newUser.save()

        res.json({
            message: "user registered successfully!",
            savedUser
        })
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => {
    console.log("PORT IS ALIVE!")
})