import './config.js' // LOAD env before we do ANYTING else
import express from 'express'   // CommonJS
import cors from 'cors'
import './db-connect.js'
import Teacher from './models/Teacher.js'

const app = express() // generates me an API (instance)

app.use( cors() )

app.get("/", (request, response) => {
  response.json({ message: "Hello. Bring me to the web, please!"})
})

app.get("/env", (req, res) => {
  res.json({
    MONGO_URI: process.env.MONGO_URI
  })
})

app.get("/teachers", async (req, res) => {

  const teachersDb = await Teacher.find()
  res.json( teachersDb )

})

app.get("/teachers/:id", async (req, res) => {
  const { id } = req.params
  const teacherFound = await Teacher.findById( id )  
  res.json( teacherFound )
})

const PORT = 5000
app.listen( PORT, () => {
  console.log(`API has started successfully on PORT ${PORT}, buddhy`)
})

