import { sample } from 'effector'
import {
  $openDocumentFileName,
  $openedFile,
  getOpenDocumentInfoFx,
  openFile
} from '.'

// sample({
//   clock: beginDocumentOpen,
//   target: $openDocumentFileName
// })

sample({
  clock: openFile,
  target: $openedFile
})

sample({
  source: $openedFile,
  filter: (fileName) => fileName !== null,
  fn: (fileName) => fileName ?? '',
  target: getOpenDocumentInfoFx
})

sample({
  clock: getOpenDocumentInfoFx.doneData,
  target: $openDocumentFileName
})

openFile.watch((s) => console.log(`Emin open fle ${s}`))
$openedFile.watch((fileId) => console.log(`Open file Id ${fileId}`))
