import {Get, Query, Route, Tags} from 'tsoa';
import {GoodbyeResponse} from './types';
import {IGoodbyeController} from './interfaces';
import {LogSucces} from '../utils/logger';

@Route('/api/goodbye')
@Tags('GoodbyeController')
export class GoodbyeController implements IGoodbyeController {
  /**
   * Endpoint que devuelve un message "Goodbye {name}" y la Date actual in JSON
   * @param {string | undefined} name Name de usuario al que se despide
   * @returns {GoodbyeResponse} Promesa de tipo GoodbyeResponse
   */
  public async getMessage(name?: string | undefined): Promise<GoodbyeResponse> {
    LogSucces('[/api/goodbye] Get Request');
    return {
      message: `Goodbye ${name || 'World'}`,
      Date: new Date().toLocaleDateString('es-AR'),
    };
  }
}
