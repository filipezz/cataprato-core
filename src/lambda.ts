import { Server } from 'http';
import { createServer, proxy, Response } from 'aws-serverless-express';
import * as express from 'express';
import { createApp } from './main';
import { Handler, Context } from 'aws-lambda';

let cachedServer: Server;

async function bootstrap(): Promise<Server> {
  const expressApp = express();

  const app = await createApp(expressApp);
  await app.init();

  return createServer(expressApp);
}

export const handler: Handler = async (
  event: any,
  context: Context,
): Promise<Response> => {
  if (!cachedServer) {
    const server = await bootstrap();
    cachedServer = server;
  }

  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
