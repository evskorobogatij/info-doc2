import { forward } from 'effector'
import {
  $infomat,
  $infomats,
  $viewMode,
  getInfomatsListFx,
  InfomatListGate,
  selectDocumentMode,
  selectRecordMode
} from '.'

$viewMode
  .on(selectRecordMode, () => 'record')
  .on(selectDocumentMode, () => 'documents')

selectDocumentMode.watch(console.log)
selectRecordMode.watch(console.log)

$viewMode.watch((state) => console.log('Mode ', state))

$infomat.watch((number) => console.log(`Selected infomat is ${number}`))

forward({
  from: InfomatListGate.open,
  to: getInfomatsListFx
})

forward({
  from: getInfomatsListFx.doneData,
  to: $infomats
})
