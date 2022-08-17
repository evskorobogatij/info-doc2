/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { AuthInfo, AuthResult } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http
  }

  /**
   * @description Аутентификация пользователя. В ответ на логин/пароль получаем объект, содержащий jwt токен, который используется для защищенных роутов
   *
   * @tags auth
   * @name AppControllerLogin
   * @request POST:/api/auth/login
   * @response `200` `AuthResult` Объект, содержащий jwt токен, который используется для защищенных роутов
   */

  /* appControllerLogin */

  login = (data: AuthInfo, params: RequestParams = {}) =>
    this.http.request<AuthResult, any>({
      path: `/api/auth/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
}
