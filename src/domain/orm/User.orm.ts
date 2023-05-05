import {userEntity} from '../entities/User.entity';

import {LogError, LogSucces} from '../../utils/logger';

// PETICIONES CRUD

/**
 * Metodo para obtener todos los usuarios desde la coleccion 'Users' de Mongo
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();
    //Ahora a buscar todos los usuarios:
    return await userModel.find({isDelete: false}); //el .find() me trae todos los users de la coleccion
  } catch (error) {
    LogError(`[ORM ERROR]: Obteniendo todos los usuarios: ${error} `);
  }
};

//TODO:
// - Get User by ID
// - Get User by Email
// - Delete User by ID
// - Create New User
// - Update User by ID
