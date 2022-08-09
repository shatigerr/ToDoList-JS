import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   name: String
})

export default new mongoose.model("Tasks", taskSchema)

