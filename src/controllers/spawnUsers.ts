import User from '../models/User';
import db from '../db';

import { EndpoitHandler } from '../types';

const users = [
  {
    username: 'Tom',
    age: 23,
    hobbies: ['football', 'music'],
  },
  {
    username: 'Nick',
    age: 31,
    hobbies: ['music'],
  },
  {
    username: 'Jerry',
    age: 15,
    hobbies: ['PC games', 'books'],
  },
];

const spawnUsers: EndpoitHandler = (_req, res) => {
  db.clearCollection('users');

  const usersFromDb = users.map((userData) => {
    const { username, age, hobbies } = userData;
    const user = new User(username, age, hobbies);
    db.addValue('users', user);
    return user;
  });

  res.writeHead(201);
  res.end(JSON.stringify(usersFromDb));
};

export default spawnUsers;
