import {Get, Query, Route, Tags} from 'tsoa';
import {BasicResponse} from './types';
import {IHelloController} from './interfaces';
import {LogSucces} from '../utils/logger';

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements IHelloController {
  /**
   * Endpoint que devuelve un message "Hello {name}" in JSON
   * @param {string | undefined} name Name de usuario al que se saluda
   * @returns {BasicResponse} Promesa de tipo BasicResponse
   */
  @Get('/')
  public async getMessage(
    @Query() name?: string | undefined
  ): Promise<BasicResponse> {
    LogSucces('[/api/hello] Get Request');
    return {
      message: `Hello ${name || 'World'}`,
    };
  }
}
