import http, { IncomingMessage, ServerResponse } from 'node:http';
import url from 'node:url';
import { Endpoit } from 'types';

export const createServer = (endpoints: Endpoit[], port: number) => {
  const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
    const reqUrl = url.parse(req.url || '', true);

    const endpoint = endpoints.find((e) => e.path === reqUrl.pathname && e.method === req.method);

    if (endpoint) {
      endpoint.handler(req, res);
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
    }
  };

  const server = http.createServer();

  server.on('request', requestHandler);

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

  return server;
};
