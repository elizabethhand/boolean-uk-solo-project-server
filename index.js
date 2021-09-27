require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const categoryRouter = require("./src/resources/category/router")
const dealRouter = require("./src/resources/deal/router")
const userRouter = require("./src/resources/user/router")
const restaurantRouter = require("./src/resources/restaurant/router")

const app = express()

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/categories", categoryRouter);
app.use("/deals", dealRouter)
app.use("/users", userRouter)
app.use("/restaurant", restaurantRouter)

app.get("*", (req, res) => {
    res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})