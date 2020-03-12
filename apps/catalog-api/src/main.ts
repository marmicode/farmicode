import * as jsonServer from 'json-server';
import { join } from 'path';

const rootPath = 'apps/catalog-api/src';

const server = jsonServer.create();
const router = jsonServer.router(join(process.cwd(), rootPath, 'assets/db.json'));
const middlewares = jsonServer.defaults({
  static: join(rootPath, 'assets/public')
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('Farmazon catalog api is running');
});
