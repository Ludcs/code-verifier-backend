import mongoose from 'mongoose';

export const userEntity = () => {
  //Crearemos un modelo de Mongo a traves de TypeScript
  let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  });

  return mongoose.model('Users', userSchema); //El primer parametro tiene que ser igual a como se llama la coleccion en Mongo Compass
};
