import { RequestHandler } from 'express';

import { Project } from '@/models';

const getAllProjects: RequestHandler = async (_req, res) => {
  const allProjects = await Project.find();

  return res.status(200).json(allProjects);
};

const createProject: RequestHandler = async (req, res) => {
  const { title, status } = req.body;

  const project = new Project();
  project.title = title;
  project.status = status;

  await project.save();

  return res.status(201).json(project);
};

const getProject: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findOneBy({
    id: parseInt(id),
  });

  if (!project) {
    return res.status(404).json({ message: `Project not found with id: ${id}` });
  }

  return res.status(200).json(project);
};

const updateProject: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  const project = await Project.findOneBy({
    id: parseInt(id),
  });

  if (!project) {
    return res.status(404).json({ message: `Project not found with id: ${id}` });
  }

  project.title = title ?? project.title;
  project.status = status ?? project.status;

  await project.save();

  return res.status(200).json(project);
};

const deleteProject: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findOneBy({
    id: parseInt(id),
  });

  if (!project) {
    return res.status(404).json({ message: `Project not found with id: ${id}` });
  }

  await project.remove();

  return res.sendStatus(204);
};

export { getAllProjects, createProject, getProject, updateProject, deleteProject };
