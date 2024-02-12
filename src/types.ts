import { IncomingMessage, ServerResponse } from 'http';

export type EndpoitHandler = (req: IncomingMessage, res: ServerResponse, endpoint: Endpoit) => void;
export type IsValid = { isValid: boolean; msg?: string };


export type Endpoit = {
  path: string;
  method: string;
  params?: Record<string, string>;
  query?: Record<string, string>;
  handler: EndpoitHandler;
};

export interface IUser {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
}

