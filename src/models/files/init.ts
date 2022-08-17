import { forward } from 'effector'
import { $files, FileListGate, getFilesListFx } from '.'

forward({
  from: FileListGate.open,
  to: getFilesListFx
})

forward({
  from: getFilesListFx.doneData,
  to: $files
})