import { IncomingMessage } from 'http';

const getBodyData = async (req: IncomingMessage) => {
  let data = '';

  for await (const chunk of req) {
    data += chunk;
  }

  if (!data) return {};

  return JSON.parse(data);
};

export default getBodyData;
