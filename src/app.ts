import { Endpoit } from './types';
import { createServer } from './server';

import dotenv from 'dotenv';
import { apiRoutes } from './routes/api_users';

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const endpoints: Endpoit[] = [...apiRoutes];

createServer(endpoints, port);
