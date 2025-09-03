import express from "express";
import { searchProjects, topSkills, searchAll } from "../controllers/queryController.js";

const router = express.Router();

// GET /api/query/projects?skill=python
router.get("/projects", searchProjects);

// GET /api/query/skills/top
router.get("/skills/top", topSkills);

// GET /api/query/search?q=...
router.get("/search", searchAll);

export default router;