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

export interface AuthInfo {
  /**
   * Имя пользователя
   * @example user
   */
  username: string

  /**
   * Пароль
   * @example 123
   */
  password: string
}

export interface AuthResult {
  /**
   * Токен доступа
   * @example eyJhbGciOiJIUzI1NiIs...
   */
  access_token: string
}

export interface CreateInfomatDto {
  /**
   * Код инфомата
   * @example 334
   */
  code: number

  /**
   * Название инфомата
   * @example Взрослая поликлиника
   */
  name: string
}

export interface InfoInfomatDto {
  /**
   * id инфомата
   * @example 62c5f5c92c0f5d5e572545da
   */
  id: string

  /**
   * Код инфомата
   * @example 334
   */
  code: number

  /**
   * Название инфомата
   * @example Взрослая поликлиника
   */
  name: string

  /**
   * Дата создания инфомата по UTC
   * @format date-time
   * @example 2022-07-06T20:51:21.415+00:00
   */
  createtAt: string

  /**
   * Дата редактирования сведений о инфомате по UTC
   * @format date-time
   * @example 2022-07-06T20:51:21.415+00:00
   */
  updatedAt: string
}

export interface UpdateInfomatDto {
  /**
   * Код инфомата
   * @example 334
   */
  code?: number

  /**
   * Название инфомата
   * @example Взрослая поликлиника
   */
  name?: string
}

export interface CreateFileDto {
  title: string
  uploadedFileId: string
}

export interface FileInfoDto {
  /**
   * ID файла
   * @example g975hdiy73424....
   */
  id: string

  /**
   * Заголовок файла
   * @example Документ...
   */
  title: string

  /**
   * Идентификатор загруженого файла
   * @example dfhg964935....
   */
  file: string

  /**
   * Дата создания инфомата по UTC
   * @format date-time
   * @example 2022-07-06T20:51:21.415+00:00
   */
  createtAt: string

  /**
   * Дата редактирования сведений о инфомате по UTC
   * @format date-time
   * @example 2022-07-06T20:51:21.415+00:00
   */
  updatedAt: string
}

export interface UpdateFileDto {
  title?: string
  uploadedFileId?: string
}

export interface FileUploadDto {
  /** @format binary */
  file: File
}

export interface UploadFileMetaDto {
  /**
   * Имя загруженого файла
   * @example ksdufydd.pdf
   */
  filename: string

  /**
   * Размер файла в байтах
   * @example 78943
   */
  size: number

  /**
   * Тип файла
   * @example application/pdf
   */
  mime: string

  /**
   * Расширение файла
   * @example pdf
   */
  ext: string
}

export interface BadUploadFileDto {
  /**
   * Код ошибки
   * @example 400
   */
  statusCode: number

  /**
   * Сообщения об ошибке
   * @example Неправильный тип файла
   */
  message: string
}
