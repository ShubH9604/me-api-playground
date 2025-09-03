# MongoDB Schema

## Profile
{
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
}

## Project
{
  title: String,
  description: String,
  links: [String],
  skills: [String]
}

## Work
{
  company: String,
  role: String,
  duration: String,
  description: String
}