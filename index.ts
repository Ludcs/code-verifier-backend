import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({data: {message: 'Goodbye, world'}});
  // res.send('Welcome to Api Restfull: Express + TS + Swagger + Mongoose');
});

app.get('/hello', (req: Request, res: Response) => {
  const name = req.query.name || 'anónimo';
  const message = `Hola ${name}`;
  const data = {message};

  res.status(200).json({data});
  //res.send('Welcome to GET Route: ¡Hello!');
});

app.listen(port, () => {
  console.log(`Express Server: running at http://localhost:${port}`);
});
