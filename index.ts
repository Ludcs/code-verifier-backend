import dotenv from 'dotenv';
import server from './src/server'; //nos traemos el index.ts de la carpeta server
import {LogError, LogSucces} from './src/utils/logger';

dotenv.config();
const port = process.env.PORT || 8000;

//Poner a escuchar al servidor (es decir, ejecutar server):
server.listen(port, () => {
  LogSucces(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

//Controlar error del server
server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`);
});
