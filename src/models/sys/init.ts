import { sample } from 'effector'
import { $isOnline, goOffline, goOnline } from '.'

sample({
  clock: goOnline,
  fn: () => true,
  target: $isOnline
})

sample({
  clock: goOffline,
  fn: () => false,
  target: $isOnline
})

