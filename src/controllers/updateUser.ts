import db from '../db';
import getBodyData from '../utils/getBodyData';
import isValidId from '../utils/isValidId';
import { IsValid } from '../types';

import { EndpoitHandler } from '../types';
import User from 'models/User';

const updateUser: EndpoitHandler = async (req, endpoint) => {
  const userData = await getBodyData(req);
  const userId = endpoint.params?.id;

  if (!userId) {
    return [{ error: 'User ID is not provided' }, 400];
  }

  if (!isValidId(userId)) {
    return [{ error: 'Invalid user ID' }, 400];
  }

  const user = db.getValue('users', userId);

  if (!user) {
    return [{ error: `User with id: ${userId} not found` }, 404];
  }

  const { isValid, msg } = validate(userData);
  if (!isValid) {
    return [{ error: `Invalid user data: ${msg}` }, 400];
  }

  user.update(userData);
  return [user, 200];
};

const validate = (userData: Partial<User>): IsValid => {
  const userName = userData.username;
  const userAge = userData.age;
  const hobbies = userData.hobbies;

  const isString = (line: unknown) => typeof line === 'string';
  const isNumber = (line: unknown) => typeof line === 'number';

  if (!isString(userName)) {
    return { isValid: false, msg: 'username should be typeof string' };
  }

  if (!isNumber(userAge)) {
    return { isValid: false, msg: 'age should be typeof number' };
  }

  if (hobbies) {
    if (!Array.isArray(hobbies)) {
      return { isValid: false, msg: 'hobbies should be an array' };
    }

    if (hobbies.length && !hobbies.every(isString)) {
      return { isValid: false, msg: 'all hobbies type should be typeof string' };
    }
  }

  return { isValid: true };
};

export default updateUser;
