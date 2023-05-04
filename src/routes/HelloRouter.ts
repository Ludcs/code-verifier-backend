import express, {Request, Response} from 'express';
import {HelloController} from '@/controller/HelloController';
import {LogInfo} from '@/utils/logger';

//Router desde Express
let helloRouter = express.Router();

//http://localhost:8000/api/hello?name=Lucho/  *esta ultima barra es la que esta definida abajo en .route('/')* y se va ejecutar todo lo que este dentro del metodo .get()
//aqui definimos todos los metodos http para esta ruta, como ser get, post, put, delete, etc:
helloRouter
  .route('/')
  //GET:
  .get(async (req: Request, res: Response) => {
    //Obtener el query param:
    let name: any = req?.query?.name;
    LogInfo(`Query param obtenido: ${name}`);

    //Generar una nueva instancia del Controller para ejecutar un metodo:
    const controller: HelloController = new HelloController();

    //Obtener respuesta que es asyncrona, getMessage fue planteado como async fn, demora un tiempo:
    const response = await controller.getMessage(name);

    //Enviar al cliente la respuesta
    return res.send(response);
  });
//.post (para esta route)
//.put (para esta route)
//.delete (para esta route)

export default helloRouter;
