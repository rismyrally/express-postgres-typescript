import { Router } from 'express';

import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '@/controllers/users';

const users = Router();

users.get('/', getAllUsers);

users.post('/', createUser);

users.get('/:id', getUser);

users.put('/:id', updateUser);

users.delete('/:id', deleteUser);

export default users;
