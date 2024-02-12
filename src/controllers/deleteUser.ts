import db from '../db';
import isValidId from '../utils/isValidId';

import { EndpoitHandler } from '../types';

const deleteUser: EndpoitHandler = async (_req, res, endpoint) => {
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

  const user = db.removeValue('users', userId);

  if (!user) {
    res.writeHead(404);

    res.end(JSON.stringify({ error: `User with id: ${userId} not found` }));
    return;
  }

  res.writeHead(204);

  res.end();
};

export default deleteUser;
