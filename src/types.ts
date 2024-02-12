import { IncomingMessage, ServerResponse } from 'http';
export type EndpoitHandler = (req: IncomingMessage, res: ServerResponse, endpoint: Endpoit) => void;

export type Endpoit = {
  path: string;
  method: string;
  params?: Record<string, string>;
  query?: Record<string, string>;
  handler: EndpoitHandler;
};

export type User = {
  id: string;
  name: string;
  age: string;
  hobbies: string[];
};
