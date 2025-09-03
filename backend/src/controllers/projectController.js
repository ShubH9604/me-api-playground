import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

export const addProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
};