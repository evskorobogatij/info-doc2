import { forward } from 'effector'
import {
  $files,
  documentsModified,
  FileListGate,
  getFilesListFx,
  removeDocumentFx,
  saveNewDocumentFx
} from '.'

forward({
  from: FileListGate.open,
  to: getFilesListFx
})

forward({
  from: getFilesListFx.doneData,
  to: $files
})

forward({
  from: saveNewDocumentFx.doneData,
  to: documentsModified
})

forward({
  from: removeDocumentFx.doneData,
  to: documentsModified
})

forward({
  from: documentsModified,
  to: getFilesListFx
})

// sample({
//   clock: saveNewDocumentFx.doneData,
//   source: $files,
//   fn: (files, newFile) => ([...files, newFile]),
//   target: $files
// })
