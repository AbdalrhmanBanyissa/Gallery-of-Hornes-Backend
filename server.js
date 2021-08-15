const express = require("express")
const server = express()

const cors = require("cors")
const { request } = require("express")
server.use(cors())

require("dotenv").config()
const PORT = process.env.PORT

server.get("/", (req, res) => {
  res.send("Hello World !")
})
/****************************************/

const data = require("./data.json")
server.get("/data", (req, res) => {
  res.send(data)
})

/****************************************/
server.listen(PORT, () => {
  console.log(`listining on Port ${PORT}`)
})
