import { ServerResponse, IncomingMessage } from 'http';
import { User } from '../models/User';
import db from '../db';

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

export default function (_req: IncomingMessage, res: ServerResponse) {
  db.clearCollection('users');

  const usersFromDb = users.map((userData) => {
    const { name, age, hobbies } = userData;
    const user = new User(name, age, hobbies);
    db.addValue('users', user);
    return user;
  });

  res.writeHead(201);
  res.end(JSON.stringify(usersFromDb));
}
