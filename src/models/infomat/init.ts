import { $viewMode, selectDocumentMode, selectRecordMode } from '.'

$viewMode
  .on(selectRecordMode, () => 'record')
  .on(selectDocumentMode, () => 'documents')

selectDocumentMode.watch(console.log)
selectRecordMode.watch(console.log)

$viewMode.watch((state) => console.log('Mode ', state))
