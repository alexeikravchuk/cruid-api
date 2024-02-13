import http, { IncomingMessage, ServerResponse } from 'node:http';
import url from 'node:url';
import { Endpoit } from 'types';

export const createServer = (endpoints: Endpoit[], port: number) => {
  const requestHandler = async (req: IncomingMessage, res: ServerResponse) => {
    try {
      const endpoint = matchEndpoint(endpoints, req);

      if (endpoint) {
        const [data, code] = await Promise.resolve(endpoint.handler(req, endpoint));
        res.writeHead(code);
        res.end(JSON.stringify(data));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Resource not found' }));
      }
    } catch (error) {
      console.log(error);
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  };

  const server = http.createServer();

  server.on('request', requestHandler);

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

  return server;
};

const matchEndpoint = (endpoints: Endpoit[], req: IncomingMessage) => {
  const reqUrl = url.parse(req.url || '', true);

  const pathParts = reqUrl.pathname?.split('/').filter((p) => p) || [];

  const query = reqUrl.query;

  const endpoit = endpoints.find((e) => {
    if (e.method !== req.method) {
      return false;
    }

    const endpointParts = e.path.split('/').filter((p) => p);

    if (endpointParts.length !== pathParts.length) {
      return false;
    }

    return endpointParts.every((part, i) => {
      if (part.startsWith(':')) {
        return true;
      }

      return part === pathParts[i];
    });
  });

  if (!endpoit) {
    return null;
  }

  const eParts = endpoit.path.split('/').filter((p) => p);

  endpoit.params = pathParts.reduce((acc, part, i) => {
    const ePart = eParts[i];

    if (ePart && ePart.startsWith(':')) {
      acc[ePart.slice(1)] = part;
    }

    return acc;
  }, {} as Record<string, string>);

  endpoit.query = query as Record<string, string>;

  return endpoit;
};
