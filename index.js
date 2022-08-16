import express from "express"
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get("/", (req, res) => res.send("API NODE JS AND EXPRESS"))

app.listen(PORT, () =>
    console.log(`Server Running on port: http://127.0.0.1:${PORT}`)
)
