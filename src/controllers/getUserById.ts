import db from '../db';
import isValidId from '../utils/isValidId';
import { EndpoitHandler } from '../types';

const getUserById: EndpoitHandler = (_req, res, endpoint) => {
  const userId = endpoint.params?.id;

  if (!userId || !isValidId(userId)) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Invalid user ID' }));
    return;
  }

  if (!userId) {
    res.end(JSON.stringify({ error: 'User ID is not provided' }));
    return;
  }

  const user = db.getValue('users', userId);

  if (!user) {
    res.writeHead(404);

    res.end(JSON.stringify({ error: `User with id: ${userId} not found` }));
    return;
  }

  res.writeHead(200);
  res.end(JSON.stringify(user));
};

export default getUserById;
