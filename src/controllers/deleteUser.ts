import db from '../db';
import isValidId from '../utils/isValidId';

import { EndpoitHandler } from '../types';

const deleteUser: EndpoitHandler = async (_req, endpoint) => {
  const userId = endpoint.params?.id;

  if (!userId) {
    return [{ error: 'User ID is not provided' }, 400];
  }

  if (!isValidId(userId)) {
    return [{ error: 'Invalid user ID' }, 400];
  }

  const user = db.removeValue('users', userId);

  if (!user) {
    return [{ error: `User with id: ${userId} not found` }, 404];
  }

  return [user, 204];
};

export default deleteUser;
