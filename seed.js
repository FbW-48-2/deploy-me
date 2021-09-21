import './config.js'
import mongoose from 'mongoose'
import Teacher from "./models/Teacher.js"
import './db-connect.js'

// Seed in some data
const seed = async () => {
  
  // clear old data 
  await Teacher.deleteMany() 

  const arrTeachers = [
    { name: "Alejandra" },
    { name: "Ghassan" },
    { name: "Mansour" },
    { name: "Rob" },
    { name: "Vasilis" },
  ]

  const teachersDb = await Teacher.create( arrTeachers )

  console.log(`Seeded ${teachersDb.length} teachers into DB`)

  mongoose.connection.close()
}
seed()