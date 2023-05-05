import express, {Express, Request, Response} from 'express';
import {GoodbyeController} from '../controller/GoodbyeController';
import {LogInfo} from '../utils/logger';

let goodbyeRouter = express.Router();

goodbyeRouter.route('/').get(async (req: Request, res: Response) => {
  let name: any = req?.query?.name;
  LogInfo(`Query param obtenido: ${name}`);

  const controller: GoodbyeController = new GoodbyeController();

  const response = await controller.getMessage(name);

  return res.send(response);
});

export default goodbyeRouter;
