# Me-API Playground

A full-stack playground to showcase my profile, projects, and work experience using a simple API with a minimal React frontend. The project demonstrates CRUD operations, search functionality, and a clean UI with dark mode and animations.  

---

## Features

- Display profile information including name, email, education, skills, and links.
- Showcase projects with title, description, skills, and clickable link icons.
- Display work experience with company, role, duration, and description.
- Search projects by skill or general search across projects and work.
- Attractive dark mode UI with hover effects and animations.

---

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Frontend:** React, Vite, Axios  
- **Other:** dotenv, CORS, JavaScript, CSS animations  

---

## Project Structure
me-api-playground/
├─ backend/           # Node.js API, database models, routes, and controllers
├─ frontend/          # React frontend with components, pages, and styles
└─ README.md          # Project overview and setup instructions

## Setup

### Backend
cd backend
npm install
# Create a .env file with your MongoDB URI
node seed.js          # Seed the database with sample data
npm run dev           # Start backend server

### Frontend
cd frontend
npm install
# Ensure .env has VITE_API_URL pointing to backend API
npm run dev           # Start frontend server
