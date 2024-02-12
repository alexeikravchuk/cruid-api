import { IsValid } from '../types';
import User from '../models/User';

const isString = (line: unknown) => typeof line === 'string';
const isNumber = (line: unknown) => typeof line === 'number';

export default function (userData: User): IsValid {
  const userName = userData.username;
  const userAge = userData.age;
  const hobbies = userData.hobbies;

  if (!isString(userName)) {
    return { isValid: false, msg: 'username should be typeof string' };
  }

  if (!isNumber(userAge)) {
    return { isValid: false, msg: 'age should be typeof number' };
  }

  if (!Array.isArray(hobbies)) {
    return { isValid: false, msg: 'hobbies should be an array' };
  }

  if (hobbies.length && !hobbies.every(isString)) {
    return { isValid: false, msg: 'all hobbies type should be typeof string' };
  }

  return { isValid: true };
}
