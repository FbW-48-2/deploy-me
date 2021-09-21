import mongoose from "mongoose"
const { Schema, model } = mongoose

const TeacherSchema = new Schema({
  name: { type: String, required: true },
})

const Teacher = model("Teacher", TeacherSchema)

module.exports = Teacher
