import { createEvent, createStore } from 'effector'

export const $infomat = createStore<number>(0)

export const $viewMode = createStore<'record' | 'documents'>('record')
export const selectRecordMode = createEvent()
export const selectDocumentMode = createEvent()
