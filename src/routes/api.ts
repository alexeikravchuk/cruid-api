import { API_METHOD } from '../constants';
import { Endpoit } from '../types';

import { addUser } from '../controllers/addUser';
import sendUsersList from '../controllers/sendUsersList';
import spawnUsers from '../controllers/spawnUsers';

export const apiRoutes: Endpoit[] = [
  {
    path: '/api/users',
    method: API_METHOD.GET,
    handler: sendUsersList,
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
    method: API_METHOD.PUT,
    handler: () => {},
  },
  {
    path: '/api/users/:id',
    method: API_METHOD.DELETE,
    handler: () => {},
  },
];
