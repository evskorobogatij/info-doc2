import { client } from '@services/client'
import { InfoInfomatDto } from '@services/data-contracts'
import { Infomats } from '@services/Infomats'
import { createEffect, createEvent, createStore } from 'effector'
import { createGate } from 'effector-react'

const infomatsApi = new Infomats(client)
export const $infomat = createStore<number>(0)

export const $viewMode = createStore<'record' | 'documents'>('record')
export const selectRecordMode = createEvent()
export const selectDocumentMode = createEvent()

export const $infomats = createStore<InfoInfomatDto[]>([])
export const getInfomatsListFx = createEffect(async () => {
  console.log('Начало загрузки инфоматов')
  const res = await infomatsApi.findAll()
  if (res.ok) {
    return res.data
  } else {
    throw new Error('Ошибка при получении списка инфоматов')
  }
})
export const $loadingInfomatList = getInfomatsListFx.pending.map(
  (pending) => pending
)
export const InfomatListGate = createGate()
