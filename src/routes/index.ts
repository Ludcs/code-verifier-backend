/**
 * Root Router (ruter raíz)
 * Es el encargado de gestionar las direcciones.
 */

//Todas las direcciones de /api llegaran aqui y este dicidirá si las ejecuta HelloRouter, UseRouter, ContactRouter, CodeValidatorRouter, etc.

import express, {Request, Response} from 'express';
import helloRouter from './HelloRouter';
import {LogInfo} from '@/utils/logger';

//Instanciar el server:
let server = express();

//Instanciar el Root Router
let rootRouter = express.Router();

//Activar las peticiones(request) para http://localhost:8000/api/. Todas las peticiones que vayan a .../api seran gestionadas desde aqui:
//GET: http://localhost:8000/api/
rootRouter.get('/', (req, res) => {
  LogInfo('GET: http://localhost:8000/api/');
  //send Welcome to...
  res.send(
    'Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose'
  );
});

//Redirecciones para especificar que rutas van a cada router & controllers
server.use('/', rootRouter); //para ruta raiz http://localhost:8000/api/
server.use('/hello', helloRouter); //para ruta http://localhost:8000/api/hello

export default server;
