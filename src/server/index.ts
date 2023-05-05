import express, {Express, Request, Response} from 'express';

import cors from 'cors'; //for security
import helmet from 'helmet'; //for security
//TODO: HTTPS
import rootRouter from '../routes'; //importar las rutas

//Creacion de Express Server (o tambien llamado App)
const server: Express = express();

//Definir SERVER para usar "/api" y usar rootRouter desde 'index.ts' de la carpeta routes
//Desde este punto 'http://localhost:8000/api/...'
server.use('/api', rootRouter);

//TODO: Conexion con Mongoose

//Configurar la seguridad con Helmet y Cors:
server.use(helmet());
server.use(cors());

//Configurar el tipo de contenido --Content Type Config-- que va a mostrar nuestro SERVER:
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

//Redireccionar para que si alguien visita http://localhost:8000/ *xq aca no va haber nada*, se redirija a http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
});

export default server;
