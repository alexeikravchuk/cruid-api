import db from '../db';
import getBodyData from '../utils/getBodyData';
import User from '../models/User';

import { EndpoitHandler } from '../types';

const addUser: EndpoitHandler = async (req, res) => {
  const userData = await getBodyData(req);

  const userName = userData.username;
  const userAge = userData.age;

  if (!userName || !userAge) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: 'Invalid user data' }));
    return;
  }

  const hobbies = userData.hobbies || [];

  const user = new User(userName, userAge, hobbies);

  db.addValue('users', user);
  res.writeHead(201);
  res.end(JSON.stringify(user));
};

export default addUser;
