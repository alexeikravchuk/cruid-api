import { API_METHOD } from '../constants';
import { Endpoit } from '../types';

import addUser from '../controllers/addUser';
import getUsers from '../controllers/getUsers';
import spawnUsers from '../controllers/spawnUsers';
import getUserById from '../controllers/getUserById';
import updateUser from '../controllers/updateUser';
import deleteUser from '../controllers/deleteUser';

export const apiRoutes: Endpoit[] = [
  {
    path: '/api/users',
    method: API_METHOD.GET,
    handler: getUsers,
  },
  {
    path: '/api/users',
    method: API_METHOD.POST,
    handler: addUser,
  },
  {
    path: '/api/users/spawn',
    method: API_METHOD.GET,
    handler: spawnUsers,
  },
  {
    path: '/api/users/:id',
    method: API_METHOD.GET,
    handler: getUserById,
  },
  {
    path: '/api/users/:id',
    method: API_METHOD.PUT,
    handler: updateUser,
  },
  {
    path: '/api/users/:id',
    method: API_METHOD.DELETE,
    handler: deleteUser,
  },
];
