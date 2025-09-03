import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: String
});

export default mongoose.model("Work", workSchema);