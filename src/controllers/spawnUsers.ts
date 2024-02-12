import User from '../models/User';
import db from '../db';

import { EndpoitHandler } from '../types';

const users = [
  {
    name: 'Tom',
    age: 23,
    hobbies: ['football', 'music'],
  },
  {
    name: 'Nick',
    age: 31,
    hobbies: ['music'],
  },
  {
    name: 'Jerry',
    age: 15,
    hobbies: ['PC games', 'books'],
  },
];

const spawnUsers: EndpoitHandler = (_req, res) => {
  db.clearCollection('users');

  const usersFromDb = users.map((userData) => {
    const { name, age, hobbies } = userData;
    const user = new User(name, age, hobbies);
    db.addValue('users', user);
    return user;
  });

  res.writeHead(201);
  res.end(JSON.stringify(usersFromDb));
};

export default spawnUsers;
