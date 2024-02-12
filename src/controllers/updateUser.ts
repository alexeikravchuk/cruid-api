import db from '../db';
import getBodyData from '../utils/getBodyData';
import isValidId from '../utils/isValidId';

import { EndpoitHandler } from '../types';

const updateUser: EndpoitHandler = async (req, res, endpoint) => {
  const userData = await getBodyData(req);
  const userId = endpoint.params?.id;

  if (!userId) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'User ID is not provided' }));
    return;
  }

  if (!isValidId(userId)) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Invalid user ID' }));
    return;
  }

  const user = db.getValue('users', userId);

  if (!user) {
    res.writeHead(404);

    res.end(JSON.stringify({ error: `User with id: ${userId} not found` }));
    return;
  }

  user.update(userData);

  res.writeHead(200);
  res.end(JSON.stringify(user));
};

export default updateUser;
