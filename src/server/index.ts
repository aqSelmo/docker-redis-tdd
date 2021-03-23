import express, { Express } from 'express';

import routes from '@routes/index';

class Server {
  public application: Express;

  constructor() {
    this.application = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.application.use(express.json());
  }

  private routes() {
    this.application.use(routes);
  }
}

export default new Server().application;
