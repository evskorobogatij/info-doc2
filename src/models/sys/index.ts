import { createEvent, createStore } from 'effector'

export const $isOnline = createStore(true)

export const goOnline = createEvent()
export const goOffline = createEvent()
