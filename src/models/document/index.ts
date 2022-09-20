import { client } from '@services/client'
import { UploadFileMetaDtoWithId } from '@services/data-contracts'
import { Files } from '@services/Files'
import { createEffect, createEvent, createStore, restore } from 'effector'
import { createGate } from 'effector-react'

export interface DocumentProps {
  id: string|null,
  title: string
  //uploadedFile: File | null
  uploadedFileId: string
}

const filesApi = new Files(client)

export const $document = createStore<DocumentProps>({
  id: null,
  title: '',
  //uploadedFile: null
  uploadedFileId: ''
})

export const $uploadedFile = createStore<File | null>(null) //$document.map(({ uploadedFile }) => uploadedFile)
export const setUploadFile = createEvent<File>()
export const clearUploadedFile = createEvent()

export const $uploadedMetadata = createStore<UploadFileMetaDtoWithId | null>(null)

export const $documentTitle = $document.map(({ title }) => title)
export const setDocumentTitle = createEvent<string>()

export const DocumentGate = createGate<string | null>()

export const beginUpload = createEvent()
export const uploadFx = createEffect(async (file: File) => {
  beginUpload()

  const uploadInfo = await filesApi.uploadFile({ file })

  if (uploadInfo.ok) {
    return uploadInfo.data
  } else {
    throw new Error('Ошибка при загрузке файлов')
  }
})

export const $filledDocument = createStore(false)

export const $fileUploading = uploadFx.pending.map((pending) => pending)

export const newDocument = createEvent()