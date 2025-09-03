import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db.js";
import profileRoutes from "./src/routes/profileRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import workRoutes from "./src/routes/workRoutes.js";
import queryRoutes from "./src/routes/queryRoutes.js";

dotenv.config();
const app = express();

// Enable CORS only for your deployed frontend
app.use(cors({
  origin: ["https://meapi-playground-seven.vercel.app/"],
  credentials: true
}));

app.use(express.json());

// DB connect
connectDB();

// Routes
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/work", workRoutes);
app.use("/api/query", queryRoutes);

// Health check
app.get("/api/health", (req, res) => res.status(200).json({ status: "ok" }));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`API running on :${PORT}`));
