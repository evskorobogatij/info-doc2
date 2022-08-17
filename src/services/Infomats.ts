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

import {
  CreateInfomatDto,
  InfoInfomatDto,
  UpdateInfomatDto
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Infomats<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http
  }

  /**
   * No description
   *
   * @tags infomats
   * @name InfomatsControllerCreate
   * @request POST:/api/infomats
   * @secure
   * @response `200` `InfoInfomatDto` Возвращает вновь созданный инфомат
   */

  /* infomatsControllerCreate */

  create = (data: CreateInfomatDto, params: RequestParams = {}) =>
    this.http.request<InfoInfomatDto, any>({
      path: `/api/infomats`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
   * No description
   *
   * @tags infomats
   * @name InfomatsControllerFindAll
   * @request GET:/api/infomats
   * @response `200` `(InfoInfomatDto)[]` Возвращает список инфоматов
   */

  /* infomatsControllerFindAll */

  findAll = (params: RequestParams = {}) =>
    this.http.request<InfoInfomatDto[], any>({
      path: `/api/infomats`,
      method: 'GET',
      format: 'json',
      ...params
    })
  /**
   * No description
   *
   * @tags infomats
   * @name InfomatsControllerFindOne
   * @request GET:/api/infomats/{id}
   * @response `200` `InfoInfomatDto` Возвращает сведения об указаном инфомате
   */

  /* infomatsControllerFindOne */

  findOne = (id: string, params: RequestParams = {}) =>
    this.http.request<InfoInfomatDto, any>({
      path: `/api/infomats/${id}`,
      method: 'GET',
      format: 'json',
      ...params
    })
  /**
   * No description
   *
   * @tags infomats
   * @name InfomatsControllerUpdate
   * @request PATCH:/api/infomats/{id}
   * @secure
   * @response `200` `InfoInfomatDto` Обновляет данные об инфомате
   */

  /* infomatsControllerUpdate */

  update = (id: string, data: UpdateInfomatDto, params: RequestParams = {}) =>
    this.http.request<InfoInfomatDto, any>({
      path: `/api/infomats/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
   * No description
   *
   * @tags infomats
   * @name InfomatsControllerRemove
   * @request DELETE:/api/infomats/{id}
   * @secure
   * @response `200` `InfoInfomatDto` Идаляет инфомат из системы
   */

  /* infomatsControllerRemove */

  remove = (id: string, params: RequestParams = {}) =>
    this.http.request<InfoInfomatDto, any>({
      path: `/api/infomats/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    })
}
