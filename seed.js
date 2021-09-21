import mongoose from 'mongoose'
const { Teacher } = require("./models/Teacher.js")
import './db-connect.js'

// Seed in some data
const seed = async () => {
  
  await Teacher.deleteMany()
  mongoose.connection.close()
}
seed()