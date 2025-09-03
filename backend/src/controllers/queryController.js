import Project from "../models/Project.js";
import Profile from "../models/Profile.js";
import Work from "../models/Work.js";

export const searchProjects = async (req, res) => {
  const { skill } = req.query;
  if (!skill) return res.status(400).json({ error: "skill query required" });

  const projects = await Project.find({ skills: { $regex: skill, $options: "i" } });
  res.json(projects);
};

export const topSkills = async (req, res) => {
  const profile = await Profile.findOne();
  if (!profile) return res.json([]);
  res.json(profile.skills.slice(0, 5));
};

export const searchAll = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "q query required" });

  const projects = await Project.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } },
      { skills: { $regex: q, $options: "i" } }
    ]
  });

  const work = await Work.find({
    $or: [
      { company: { $regex: q, $options: "i" } },
      { role: { $regex: q, $options: "i" } }
    ]
  });

  res.json({ projects, work });
};