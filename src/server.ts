import express, { Express } from 'express';

import route from '@routes/index.routes';

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
    this.application.use(route);
  }
}

export default new Server().application;
