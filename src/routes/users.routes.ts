import { Router } from 'express';
import { getRepository } from 'typeorm';

import { User } from '@entities/user.entity';

interface UserInterface {
  fullname: string;
  birthday: string;
  email: string;
  login: string;
  password: string;
}

const routes = Router();

routes.get('/', async (_, response) => {
  const repository = getRepository(User);

  const users = await repository.find();
  return response.json(users);
});

routes.post('/', async (request, response) => {
  const {
    fullname,
    birthday,
    email,
    login,
    password,
  }: UserInterface = request.body;
  const repository = getRepository(User);

  const user = await repository.save({
    fullname,
    birthday,
    email,
    login,
    password,
  });

  return response.json(user);
});

export default routes;
