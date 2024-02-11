import { API_METHOD } from '../constants';
import { Endpoit } from '../types';

import { addUser } from '../controllers/addUser';
import sendUsersList from '../controllers/sendUsersList';

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
];
