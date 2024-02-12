import db from '../db';

import { EndpoitHandler } from '../types';

const sebdUsersList: EndpoitHandler = (_req, res) => {
  res.writeHead(200);
  const users = db.getCollection('users');
  res.end(JSON.stringify(users));
};

export default sebdUsersList;
