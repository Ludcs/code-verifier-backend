# Code-Verifier-Backend

Node Express Project - Backend

## Dependencias:

- Concurrently: para poder correr en un solo script varios comandos que se usan al mismo tiempo.

- Dotenv: para crear dentro del archivo .env las variables de entorno que no se subiran al repositorio de Github. En esta clase tenemos el ejemplo del PORT donde se correra el server.

- Eslint: para aplicar reglas sobre como se deberá desarrollar el código.

- Express: framework de Node.js para comenzar a crear nuestro server.

- Jest: para realizar test unitarios sobre nuestro codigo.

- Nodemon: para que automaticamente se actualice en tiempo real cualquier modificacion que hayamos hecho en el projecto.

- Serve: para servir a nivel del navegador las pruebas de los test realizados y verlos con estilos css.

- TypeScript: para tipar el codigo en tiempo de desarrollo.

- @types: para usar los types de node, express, jest.

- Webpack dependencies: para empaquetar y minimizar el paquete final.

- CORS: para seguridad

- Helmet: para seguridad

- Mongoose: librería para Node.js que nos permite escribir consultas para una base de datos de MongoDB

## Scripts:

- "build": buscara el archivo tsconfig y aplicara la configuración establecida en él (version de ES, creacion de carpeta ./dist, etc.).

- "start": ejecuta el archivo index.js ya se transpilado.

- "dev": aplica el script build con la bandera --watch y activa nodemon para estar atento a los cambios que haya.

- "test": ejecuta tests con jest

- "serve": ejecuta tests y levanta lo que este en la ruta coverage/lcov-report para servirlo en localhost en un puerto asignado.

## .env:

- crear variable de entorno PORT asignando un valor para el puerto en el que se desee levantar el server.
