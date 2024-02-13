import db from '../db';

import { EndpoitHandler } from '../types';

const getUsers: EndpoitHandler = () => {
  const users = db.getCollection('users');
  return [users, 200];
};

export default getUsers;
