// import express from 'express' // ES 6 modules
import express from 'express'   // CommonJS
import cors from 'cors'
const app = express() // generates me an API (instance)

app.use( cors() )

// FAKE DATABASE
const arrTeachers = [
  { id: "1", name: "Alejandra" },
  { id: "2", name: "Ghassan" },
  { id: "3", name: "Mansour" },
  { id: "4", name: "Rob" },
  { id: "5", name: "Vasilis" },
]

app.get("/", (request, response) => {
  response.json({ message: "Hello. Bring me to the web, please!"})
})

app.get("/teachers", (request, response) => {
  console.log("You want teachers, right??????")
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

