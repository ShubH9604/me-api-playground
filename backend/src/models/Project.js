import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  links: [String],
  skills: [String]
});

export default mongoose.model("Project", projectSchema);