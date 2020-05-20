import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'API is running on port 3000' });
});

routes.get('/users', UserController.index);

routes.get('/users/search/:search', UserController.search);

routes.post('/users/create', UserController.store);

routes.delete('/users/:id', UserController.destroy);

export default routes;
