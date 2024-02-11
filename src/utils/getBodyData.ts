import { IncomingMessage } from 'http';

export const getBodyData = async (req: IncomingMessage) => {
  let data = '';

  for await (const chunk of req) {
    data += chunk;
  }

  return data;
};
