import { RequestHandler } from 'express';

import { User } from '@/models';

const getAllUsers: RequestHandler = async (_req, res) => {
  const allUsers = await User.find();

  return res.status(200).json(allUsers);
};

const createUser: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;

  await user.save();

  return res.status(201).json(user);
};

const getUser: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOneBy({
    id,
  });

  if (!user) {
    return res.status(404).json({ message: `User not found with id: ${id}` });
  }

  return res.status(200).json(user);
};

const updateUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const user = await User.findOneBy({
    id,
  });

  if (!user) {
    return res.status(404).json({ message: `User not found with id: ${id}` });
  }

  user.name = name ?? user.name;
  user.email = email ?? user.email;
  user.password = password ?? user.password;

  await user.save();

  return res.status(200).json(user);
};

const deleteUser: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOneBy({
    id,
  });

  if (!user) {
    return res.status(404).json({ message: `User not found with id: ${id}` });
  }

  await user.remove();

  return res.sendStatus(204);
};

export { getAllUsers, createUser, getUser, updateUser, deleteUser };
