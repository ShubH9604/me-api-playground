import express from "express";
import { getProjects, addProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", addProject); // optional (for seeding via API)

export default router;