import { IncomingMessage, ServerResponse } from 'http';
import db from '../db';

export default function (_req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200);
  const users = db.getCollection('users');
  res.end(JSON.stringify(users));
}
