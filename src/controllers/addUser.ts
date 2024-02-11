import { IncomingMessage, ServerResponse } from 'http';
import db from '../db';
import { getBodyData } from '../utils/getBodyData';
import { User } from '../models/User';

export const addUser = async (req: IncomingMessage, res: ServerResponse) => {
  const rawData = await getBodyData(req);

  const userData = JSON.parse(rawData);

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
