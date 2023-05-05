import {GoodbyeResponse} from './types';
import {IGoodbyeController} from './interfaces';
import {LogSucces} from '../utils/logger';

export class GoodbyeController implements IGoodbyeController {
  public async getMessage(name?: string | undefined): Promise<GoodbyeResponse> {
    LogSucces('[/api/goodbye] Get Request');
    return {
      message: `Goodbye ${name || 'World'}`,
      Date: new Date().toLocaleDateString('es-AR'),
    };
  }
}
