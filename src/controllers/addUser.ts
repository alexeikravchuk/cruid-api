import db from '../db';
import getBodyData from '../utils/getBodyData';
import User from '../models/User';

import { EndpoitHandler } from '../types';
import validateUser from '../utils/validateUser';

const addUser: EndpoitHandler = async (req, res) => {
  const userData = await getBodyData(req);

  const { isValid, msg } = validateUser(userData);

  if (!isValid) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: `Invalid user data: ${msg}` }));
    return;
  }

  const userName = userData.username;
  const userAge = userData.age;
  const hobbies = userData.hobbies;

  const user = new User(userName, userAge, hobbies);

  db.addValue('users', user);
  res.writeHead(201);
  res.end(JSON.stringify(user));
};

export default addUser;
