import cors from 'cors';
import express from 'express';
import './database';
import routes from './routes';

/**
  CLASSE DE INICIALIZAÇÃO DO SERVIDOR EXPRESS (API)
 */
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // ATIVA O CORS
    this.server.use(cors());

    //DEFINE O FORMATO JSON COMO PADRÃO DAS REQUISIÇÕES
    this.server.use(express.json());
  }

  /**
    INICIALIZA AS ROTAS DA API  
   */
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
