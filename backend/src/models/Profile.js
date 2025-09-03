import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  skills: [String],
  links: {
    github: String,
    linkedin: String,
    portfolio: String,
    resume: String
  }
});

export default mongoose.model("Profile", profileSchema);