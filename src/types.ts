import { IncomingMessage } from 'http';

export type ResponseData = [data: unknown, code: number];

export type EndpoitHandler = (req: IncomingMessage, endpoint: Endpoit) => ResponseData | Promise<ResponseData>;

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
