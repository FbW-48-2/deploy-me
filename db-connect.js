import mongoose from 'mongoose'

// BAAAD!
// const MONGO_URI = "mongodb://localhost/teachers-db-fbw48?retryWrites=true&w=majority"

// SENSITIVIE INFORMATION ! => OUTSIDE OF CODE!!!
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log("Connection to database established!"))
.catch((err) => console.log("[ERROR] Connection failed!", err.message))