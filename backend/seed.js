import dotenv from "dotenv";
import mongoose from "mongoose";
import Profile from "./src/models/Profile.js";
import Project from "./src/models/Project.js";
import Work from "./src/models/Work.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    await Profile.deleteMany();
    await Project.deleteMany();
    await Work.deleteMany();

    await Profile.create({
      name: "Shubh Kalaria",
      email: "shubh.kalaria@gmail.com",
      education: "B.Tech in Computer & Communication Engineering",
      skills: ["Full-stack Web Development", "Machine Learning", "React", "Node.js", "MongoDB", "Django", "C++", "Vite"],
      links: {
        github: "https://github.com/shubhkalaria",
        linkedin: "https://linkedin.com/in/shubhkalaria",
        portfolio: "https://shubhkalaria.vercel.app",
        resume: "https://drive.google.com/your-resume-link"
      }
    });

    await Project.insertMany([
      {
        title: "Traffic Analysis & Route Optimization",
        description: "This project is a real-time traffic analysis and route optimization system that helps users find the fastest and most efficient routes between locations using live traffic data. It integrates real-time traffic information, calculates optimal routes, and displays them on an interactive map using Folium. The project also provides traffic trend analysis to help users understand congestion patterns over time.",
        links: ["https://github.com/ShubH9604/Traffic-Analysis-Route-Optimisation"],
        skills: ["Python", "Streamlit", "Folium", "Plotly", "Pandas", "Polyline", "Google Maps API"]
      },
      {
        title: "CampusConnect-WebApp",
        description: "CampusConnect is a comprehensive Event Management System built with Django that streamlines the creation, management, and approval of events within an organization or institution. It enhances collaboration between users and administrators through an intuitive interface and automated email notifications.",
        links: ["https://github.com/ShubH9604/CampusConnect-WebApp"],
        skills: ["Django", "SQLite (default Django database)", "Django Templates (HTML, CSS)", "SMTP with Django's email utilities"]
      },
      {
        title: "Food Calorie Recognition",
        description: "This project focuses on building a food calorie recognition system that can classify uploaded food images into categories like fruits and vegetables, predict the exact food item, and retrieve its calorie information. The system is deployed through a Streamlit web interface, making it easy for users to interact with.",
        links: ["https://github.com/ShubH9604/Food-Calorie-Recognition"],
        skills: ["Python", "TensorFlow/Keras", "OpenCV", "Pandas", "Streamlit"]
      },
      {
        title: "Weather Forecast App",
        description: "A modern and responsive Weather Forecast WebApp that allows users to search for any city across the globe and view real-time weather details, including temperature, humidity, wind speed, and more. The app also displays a 5-day weather forecast to help users plan ahead.",
        links: ["https://github.com/shubhkalaria/weather-forecast"],
        skills: ["HTML", "CSS", "JavaScript", "OpenWeather API"]
      }
    ]);

    await Work.insertMany([
      {
        company: "Metis Intellisystems Pvt. Ltd.",
        role: "AI&ML Intern",
        duration: "May'25 - July'25",
        description: "I am excited to announce that I have received an offer for a Web Developer Trainee and Intern position at Acdemor. This opportunity will allow me to gain hands-on experience in web development, collaborate with a talented team, and contribute to exciting projects. I look forward to starting this journey and expanding my skills in web development."
      },
      {
        company: "Prodigy Infotech",
        role: "Machine Learning Intern",
        duration: "July'24",
        description: "I am excited to announce that I have received an offer for a Web Developer Trainee and Intern position at Acdemor. This opportunity will allow me to gain hands-on experience in web development, collaborate with a talented team, and contribute to exciting projects. I look forward to starting this journey and expanding my skills in web development."
      },
      {
        company: "Academor",
        role: "Web Developer(Trainee & Intern)",
        duration: "June'24 - July'24",
        description: "I am excited to announce that I have received an offer for a Web Developer Trainee and Intern position at Acdemor. This opportunity will allow me to gain hands-on experience in web development, collaborate with a talented team, and contribute to exciting projects. I look forward to starting this journey and expanding my skills in web development."
      }, 
    ]);

    console.log("Seeding done!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();