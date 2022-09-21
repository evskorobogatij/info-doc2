import { client } from '@services/client'
import {
  CreateFileDto,
  FileInfoDto,
  UpdateFileDto
} from '@services/data-contracts'
import { Files } from '@services/Files'
import { createEffect, createEvent, createStore } from 'effector'
import { createGate } from 'effector-react'

interface UpdateFileDtoWithId extends UpdateFileDto {
  id: string
}

const filesApi = new Files(client)
export const $files = createStore<FileInfoDto[]>([])
export const getFilesListFx = createEffect(async () => {
  const res = await filesApi.findAll()
  if (res.ok) {
    return res.data
  } else {
    throw new Error('Ошибка получения списка файлов')
  }
})

export const removeDocumentFx = createEffect(async (uid: string) => {
  const res = await filesApi.remove(uid)
  if (res.ok) {
    return res.data
  } else {
    throw new Error('Ошибка при удалении документа')
  }
})

export const saveNewDocumentFx = createEffect(
  async ({ title, uploadedFileId }: CreateFileDto) => {
    const res = await filesApi.create({ title, uploadedFileId })
    if (res.ok) {
      return res.data
    } else {
      throw new Error('Ошибка при сохранении документа')
    }
  }
)
export const savingDocument = saveNewDocumentFx.pending.map(
  (pending) => pending
)

export const saveEditedDocumentFx = createEffect(
  async ({id, title, uploadedFileId }: UpdateFileDtoWithId) => {
    const res = await filesApi.update(id, { title, uploadedFileId })
    if (res.ok) return res.data
    else throw new Error('Ошибка при обновлении информации о документе')
    //
  }
)

export const documentsModified = createEvent()

export const $loading = getFilesListFx.pending.map((pending) => pending)
export const FileListGate = createGate()
