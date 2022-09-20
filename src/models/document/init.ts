import { forward, sample } from 'effector'
import { title } from 'process'
import {
  $document,
  $documentTitle,
  $filledDocument,
  $uploadedFile,
  $uploadedMetadata,
  beginUpload,
  clearUploadedFile,
  DocumentGate,
  DocumentProps,
  newDocument,
  setDocumentTitle,
  setUploadFile,
  uploadFx
} from '.'

// forward({
//   from: setDocumentTitle,
//   to: $documentTitle
// })

sample({
  clock: setDocumentTitle,
  source: $document,
  fn: (state, title) => ({ ...state, title }),
  target: $document
})

sample({
  clock: setUploadFile,
  target: $uploadedFile
})

sample({
  clock: clearUploadedFile,
  fn: () => null,
  target: $uploadedFile
})

sample({
  clock: setUploadFile,
  filter: (uploaded) => uploaded !== null,
  target: uploadFx
})

sample({
  clock: beginUpload,
  fn: () => null,
  target: $uploadedMetadata
})

forward({
  from: uploadFx.doneData,
  to: $uploadedMetadata
})

sample({
  source: { $uploadedMetadata, $documentTitle },
  fn: ({ $documentTitle, $uploadedMetadata }) =>
    Boolean($documentTitle) && Boolean($uploadedMetadata),
  target: $filledDocument
})

$documentTitle.watch((title) => console.log(`Title ${title}`))
$uploadedMetadata.watch((meta) => console.log('File metadata', meta))
$filledDocument.watch((filled) =>
  console.log(`Filled document status ${filled}`)
)

sample({
  clock: newDocument,
  fn: (): DocumentProps => ({ id: null, title: '', uploadedFileId: '' }),
  target: $document
})

sample({
  clock: newDocument,
  fn: () => null,
  target: $uploadedFile
})

sample({
  clock: newDocument,
  source: $document,
  filter: ({ uploadedFileId }) => uploadedFileId === '',
  fn: () => null,
  target: $uploadedMetadata
})

sample({
  clock: DocumentGate.open,
  filter: (data) => data === null,
  target: newDocument
})
