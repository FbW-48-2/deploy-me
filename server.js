import './config.js' // LOAD env before we do ANYTING else
import express from 'express'   // CommonJS
import cors from 'cors'
import './db-connect.js'

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

app.get("/teachers", (request, response) => {
  response.json( arrTeachers )
})

app.get("/teachers/:id", (request, response) => {
  const { id } = request.params
  const teacherFound = arrTeachers.find( teacher => teacher.id === id )  
  response.json( teacherFound )
})

const PORT = 5000
app.listen( PORT, () => {
  console.log(`API has started successfully on PORT ${PORT}, buddhy`)
})

