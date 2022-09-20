import { client } from '@services/client'
import { CreateFileDto, FileInfoDto } from '@services/data-contracts'
import { Files } from '@services/Files'
import { createEffect, createEvent, createStore } from 'effector'
import { createGate } from 'effector-react'

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

export const documentsModified = createEvent()

export const $loading = getFilesListFx.pending.map((pending) => pending)
export const FileListGate = createGate()
