import express from "express";
import { getWork } from "../controllers/workController.js";

const router = express.Router();

// GET /api/work
router.get("/", getWork);

export default router;