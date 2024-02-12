import db from '../db';
import getBodyData from '../utils/getBodyData';
import User from '../models/User';

import { EndpoitHandler } from '../types';
import validateUser from '../utils/validateUser';

const addUser: EndpoitHandler = async (req) => {
  const userData = await getBodyData(req);

  const { isValid, msg } = validateUser(userData);

  if (!isValid) {
    return [{ error: `Invalid user data: ${msg}` }, 400];
  }

  const userName = userData.username;
  const userAge = userData.age;
  const hobbies = userData.hobbies;

  const user = new User(userName, userAge, hobbies);

  db.addValue('users', user);
  return [user, 201];
};

export default addUser;
