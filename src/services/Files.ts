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
  BadUploadFileDto,
  CreateFileDto,
  FileInfoDto,
  FileUploadDto,
  UpdateFileDto,
  UploadFileMetaDto
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Files<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http
  }

  /**
   * @description Внесение сведений о файле
   *
   * @tags files
   * @name FilesControllerCreate
   * @request POST:/api/files
   * @secure
   * @response `200` `FileInfoDto` Сведения о файле
   */

  /* filesControllerCreate */

  create = (data: CreateFileDto, params: RequestParams = {}) =>
    this.http.request<FileInfoDto, any>({
      path: `/api/files`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
   * @description Получение списка загруженых файлов с метаданными
   *
   * @tags files
   * @name FilesControllerFindAll
   * @request GET:/api/files
   * @response `200` `(FileInfoDto)[]` Список файлов
   */

  /* filesControllerFindAll */

  findAll = (params: RequestParams = {}) =>
    this.http.request<FileInfoDto[], any>({
      path: `/api/files`,
      method: 'GET',
      format: 'json',
      ...params
    })
  /**
   * @description Получение сведений о файле
   *
   * @tags files
   * @name FilesControllerFindOne
   * @request GET:/api/files/{id}
   * @response `200` `FileInfoDto` Сведения о файле
   */

  /* filesControllerFindOne */

  findOne = (id: string, params: RequestParams = {}) =>
    this.http.request<FileInfoDto, any>({
      path: `/api/files/${id}`,
      method: 'GET',
      format: 'json',
      ...params
    })
  /**
   * @description Редактирования сведений о файле
   *
   * @tags files
   * @name FilesControllerUpdate
   * @request PATCH:/api/files/{id}
   * @secure
   * @response `200` `FileInfoDto` Сведения о файле
   */

  /* filesControllerUpdate */

  update = (id: string, data: UpdateFileDto, params: RequestParams = {}) =>
    this.http.request<FileInfoDto, any>({
      path: `/api/files/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    })
  /**
   * @description Удаление сведений о файле
   *
   * @tags files
   * @name FilesControllerRemove
   * @request DELETE:/api/files/{id}
   * @secure
   * @response `200` `FileInfoDto` Сведения о файле
   */

  /* filesControllerRemove */

  remove = (id: string, params: RequestParams = {}) =>
    this.http.request<FileInfoDto, any>({
      path: `/api/files/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    })
  /**
   * @description Загрузка файла на сервер
   *
   * @tags files
   * @name UploadedFilesControllerUploadFile
   * @request POST:/api/upload
   * @secure
   * @response `200` `UploadFileMetaDto` Метаданные загруженого файла
   * @response `400` `BadUploadFileDto` Ошибка при загрузке файла
   */

  /* uploadedFilesControllerUploadFile */

  uploadFile = (data: FileUploadDto, params: RequestParams = {}) =>
    this.http.request<UploadFileMetaDto, BadUploadFileDto>({
      path: `/api/upload`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params
    })
  /**
   * @description Удаление загруженого файла
   *
   * @tags files
   * @name UploadedFilesControllerRemoveUploaded
   * @request DELETE:/api/uploaded/{id}
   * @secure
   * @response `200` `UploadFileMetaDto` Получение метаданных удаленного файла
   */

  /* uploadedFilesControllerRemoveUploaded */

  removeUploaded = (id: string, params: RequestParams = {}) =>
    this.http.request<UploadFileMetaDto, any>({
      path: `/api/uploaded/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    })
  /**
   * @description Возвращает файл с сервера
   *
   * @tags files
   * @name UploadedFilesControllerDownload
   * @request GET:/api/documents/{filename}
   * @response `200` `void`
   */

  /* uploadedFilesControllerDownload */

  download = (filename: string, params: RequestParams = {}) =>
    this.http.request<void, any>({
      path: `/api/documents/${filename}`,
      method: 'GET',
      ...params
    })
}
