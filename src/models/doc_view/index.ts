import { client } from '@services/client'
import { Files } from '@services/Files'
import { createEffect, createEvent, createStore } from 'effector'

const filesApi = new Files(client)

export const $openedFile = createStore<string | null>(null)
export const openFile = createEvent<string>()

export const $openDocumentFileName = createStore<string>('')


export const getOpenDocumentInfoFx = createEffect(async (fileId: string) => {
  const res = await filesApi.uploadedMetadata(fileId)
  if (res.ok) {
    console.info(res.data.filename)
    return res.data.filename
  } else throw new Error('Ошибка при получении имени документа')
})


// export const beginDocumentOpen = getOpenDocumentInfoFx.prepend<string>(()=>'')